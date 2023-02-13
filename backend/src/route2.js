const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res)=>
{
    res.send("This is route 2")
})


module.exports = router