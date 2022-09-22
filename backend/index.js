const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8000;


app.post("/getTemplates", (req, res)=>{
    res.json({
        error: false
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