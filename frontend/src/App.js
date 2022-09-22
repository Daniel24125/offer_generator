import {useDropzone} from 'react-dropzone'
import React from 'react'
import InactiveUpload from './Components/InactiveUpload'
import { Button, Snackbar } from '@mui/material'
import Loading from './Components/Loading'

function App() {
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const onDrop = React.useCallback(acceptedFiles => {
    // Do something with the files
    if(acceptedFiles.length > 1){
      setError("Submete apenas um ficheiro excel.")
    }else if(!acceptedFiles[0].name.split(".")[1] || (acceptedFiles[0].name.split(".")[1]!== "xlsx" && acceptedFiles[0].name.split(".")[1]!== "xls")){
      setError("O ficheiro que submeteste não é um ficheiro excel.")
    }else{
      console.log(process.env.REACT_APP_API_BASE)
    }
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
      

  return (
    !loading ? <div className="dropContainer"{...getRootProps()} >
      <input {...getInputProps()} />
      <InactiveUpload isDragActive={isDragActive} />
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={Boolean(error)}
        onClose={()=>setError("")}
        message={error}
        action={<Button onClick={(e)=>{
          setError("")
          e.stopPropagation()
        }}>
          fechar
        </Button>}
    />
    </div> : 
    <Loading />
  );
}

export default App;
