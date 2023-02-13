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

router.post('/',async (req,res)=>
{
  console.log(req.body);
  const dat=req.body.names;
  console.log(dat)
  str="insert into users values (?)"
  await conn.query(str,dat ,(err, rows, fields) => {
    if (err) throw err
    console.log("Inserted Successfully!!!!")
  });
  res.sendStatus(201);
})

// conn.end(function(err) {
//     if (err) throw err;
//     console.log("Database Disconnected!");
//   });
module.exports = router