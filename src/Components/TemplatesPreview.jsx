import { Button, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import GetAppIcon from '@mui/icons-material/GetApp';
import download from "downloadjs"
import {toJpeg} from "html-to-image"

const TemplatesPreview = ({
    templates,
    setTemplates
}) => {
    const [selectedSVG, setSelectedSVG] = React.useState(null)
  
    React.useEffect(()=>{
        if(Boolean(selectedSVG)){
            selectedSVG.forEach(offer=>{
                var node = document.querySelector(`#${offer.selector} svg`);
                console.log(node)
                toJpeg(node)
                    .then(function (dataUrl) {
                        download(dataUrl, `${offer.selector}.jpeg`);
                    });
                // console.log(offer)
                // toImg(`.${offer.selector}`, 'Oferta', {
                //     scale: 30,
                //     format: 'jpeg',
                //     // quality: 0.01,
                //     download: true,
                //     // ignore: '.ignored'
                //   })
            })
        }
        setSelectedSVG(null)
    },[selectedSVG])

    return (
        <>
            {/* {Boolean(selectedSVG) ? 
                <DownloadSVG 
                    offers={selectedSVG}
                    setSelectedSVG={setSelectedSVG}
                 />
            :  */}
            <div className='templatesContainer'>
                <div className="templatesContainerHeader">
                    <Typography variant="h5"> Pré-visualização dos templates</Typography>
                    <div className='templatesHeaderActions'>
                        <Tooltip title="Fazer download de todos os templates como imagens">
                            <IconButton onClick={()=>setSelectedSVG(templates.map((o,i)=>{
                                return {
                                    selector: `offer${i}`, 
                                    svg: o
                                }
                            }))}>
                                <GetAppIcon/>
                            </IconButton>
                        </Tooltip>
                        <Button onClick={()=>setTemplates(null)}>voltar</Button>
                    </div>
                </div>
                <div className='templatesWrapper'>
                    {templates.map((t, i)=>{
                        return <Tooltip title="Download desta oferta">
                            <div onClick={()=>setSelectedSVG([{
                                selector: `offer${i}`, 
                                svg: t
                            }])} key={i} id={`offer${i}`} className="offerContainer" dangerouslySetInnerHTML={{ __html: t }} />
                            </Tooltip>
                    })}
                </div>
            </div>
            {/* } */}
        </>
    )
}

export default TemplatesPreview