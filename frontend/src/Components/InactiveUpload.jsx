import React from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Typography } from '@mui/material';

const InactiveUpload = ({isDragActive}) => {
  return (
    <>
        <div
            className={`dragZone ${isDragActive?"activeDrag":""}`}>
                <FileUploadIcon />
            </div>
            <Typography style={{width: 250, textAlign: "center"}} variant="h6">
                Arrastar o ficheiro ou clicar para selecionar o ficheiro excel
            </Typography>
    </>
  )
}

export default InactiveUpload