const express = require('express')
const router = express.Router()
const path = require('path')

router.post('/', (req, res)=>
{
    //TODO: send questions for given list of tags
    var tags=[req.body]
    //tags: ["str1","str2","str3"]
    var str=""
})

module.exports = router