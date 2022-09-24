import {useDropzone} from 'react-dropzone'
import React from 'react'
import InactiveUpload from './Components/InactiveUpload'
import { Button, Snackbar } from '@mui/material'
import Loading from './Components/Loading'
import axios from "axios"
import TemplatesPreview from './Components/TemplatesPreview'

function App() {
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [templates, setTemplates] = React.useState(null)

  const onDrop = React.useCallback(async (acceptedFiles) => {
    // Do something with the files
    if(acceptedFiles.length > 1){
      setError("Submete apenas um ficheiro excel.")
    }else if(!acceptedFiles[0].name.split(".")[1] || (acceptedFiles[0].name.split(".")[1]!== "xlsx" && acceptedFiles[0].name.split(".")[1]!== "xls")){
      setError("O ficheiro que submeteste não é um ficheiro excel.")
    }else{
      const formData = new FormData();
      formData.append("excel", acceptedFiles[0]);
      setLoading(true)
      const {data: response} = await axios.post(
        '/getTemplates/',
        formData
      )
      setLoading(false)
      if(response.error){
        setError(response.msg)
      }else{
        setTemplates(response.data)
      }
    }
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
      

  return (<>
    {!Boolean(templates) ? !loading ? <div className="dropContainer"{...getRootProps()} >
        <input name="excel" {...getInputProps()} />
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
    : <TemplatesPreview 
        templates={templates}
        setTemplates={setTemplates}
      />   } 
  </>);
}

export default App;
