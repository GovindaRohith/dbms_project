const express = require('express')
const app = express()
const path = require('path')
const port = 5000
var cors = require('cors')



app.use(cors());
app.use(express.json());

app.use((req, _res, next) => {
  console.log("Backend reciever start **********")
    console.log("Type:  "+req.method)
    console.log("URL:  "+req.path);
    console.log("DATA:  "+req.body);
    console.log("Backend reciever end ******")
    next();
})


app.get('/',(req, res)=>{
  res.send("This is home page")
})
app.post('/',(req, res)=>{
  res.send("This is home page")
})
const route1=require("./src/login.js")
const route2=require("./src/tag.js")
app.use('/login',route1)
app.use('/tag',route2)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`)
})