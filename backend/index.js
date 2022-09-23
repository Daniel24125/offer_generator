const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const multer  = require('multer')
const path = require('path');
const publicPath = path.join(__dirname, '..', 'frontend/build');
app.use(express.static(publicPath));
require('dotenv').config()


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

const {readExcelBuffer} = require("./utils/excel")

app.post("/getTemplates", (req, res)=>{
    upload(req, res, async err => {       
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
        const buffer = req.files[0].buffer
        const parsedTamplates = await readExcelBuffer(buffer)
        res.json({
            error: false,
            data: parsedTamplates
        })
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(port, () => {
console.log("App is listenning o port " + port);
});