const express = require('express')
const router = express.Router()
const path = require('path')
const conn=require('./db')

var str;

router.get('/', (req, res)=>
{
    // str="insert into users values('Name');"
    str="select * from users;"
    conn.query(str, (err, rows, fields) => {
      if (err) throw err
      res.send(rows)
    })
})

router.post('/', (req,res)=>
{
  console.log(req.body);
  const username=req.body.name;
  const password=req.body.password;
  var code=201;
  console.log("Username:  "+username);
  console.log("Password:  "+password);
  str="insert into users(display_name,password,creation_date,last_access_date) values (?,?,NOW(),NOW())";
  conn.query(str,[username,password] ,(error, result) => {
    if (error)
    {
      console.log("Could not insert into users table primary key");
      code=404;
    }
    res.sendStatus(code);
  });
})

router.put('/',(req,res)=>{
  const username=req.body.name;
  var code=201;
  console.log("Forgot password for : "+username);
  str="update users set password=? where display_name=?";
  conn.query(str,[username,username],(error, result)=>{
    console.log(result);
    if (result.affectedRows==0)
    {
      console.log("Could not do forgot password primary key");
      code=404;
    }
    res.sendStatus(code);
  })
})

router.post("/signin",(req,res)=>{
  const name=req.body.user;
  const password=req.body.password;
  var code=201;
  str="select display_name,password from users where display_name=? and password=?;"
  conn.query(str,[name,password],(error,rows,fields)=>{
    if(error) throw err;
    if(rows.length==0)  //error handling
    {
      res.sendStatus(404)
    }
    else 
    {
      res.sendStatus(200)
    }
  })
})

// conn.end(function(err) {
//     if (err) throw err;
//     console.log("Database Disconnected!");
//   });
module.exports = router