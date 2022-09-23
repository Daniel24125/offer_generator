const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const multer  = require('multer')



app.use(cors({
    origin: [
        "http://localhost:3000",
    ],
    methods: "GET,PATCH,POST,DELETE",
    allowedHeaders: [
        "Content-Type,authorization",
         "Content-Type,X-Requested-With", 
         "responseType, arraybuffer"
        ]
  }))
const storage = multer.memoryStorage()
const upload = multer({ storage: storage }).any("excel")


app.post("/getTemplates", (req, res)=>{
    upload(req, res, function (err) {       
        if (err instanceof multer.MulterError) {
            console.log("A Multer error occurred when uploading.", err)
            res.json({
                error: true, 
                msg: String(err)
            })
        } else if (err) {
            console.log("An unknown error occurred when uploading.", err)
            res.json({
                error: true, 
                msg: String(err)
            })
        }   
        const file = req.files[0].buffer
        console.log(file)
        res.json({
            error: false
        })
    })
})

app.post("/saveSVG", (req, res)=>{
    res.json({
        error: false
    })
})

app.listen(port, () => {
console.log("App is listenning o port " + port);
});