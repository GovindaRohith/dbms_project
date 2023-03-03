const express = require('express')
const router = express.Router()
const path = require('path')
const conn=require('./db.js')

router.post('/', (req, res)=>
{
    //TODO: send questions for given list of tags
    var rec="";
    for(i=0;i<req.body.length;i++)
    {
        rec=rec+req.body[i]+" ";
    }
    console.log(rec)
    rec=rec.trim()
    var tags=rec.split(" ");
    console.log(tags)
    var str=" (B.tag_name='"+tags[0]+"' ";
    //or B.tag_name='C' //end here
    for(i=1;i<tags.length;i++)
    {
        str=str+"or B.tag_name='"+tags[i]+"' "
    }
    str=str+") )"
    var pre_query="with posts_tag (post_id) as "+
   " ( "+
   "select A.post_id as post_id "+
   "FROM tag_posts as A,tags as B "+
   "WHERE A.tag_id=B.tag_id and ";
    var pos_query="select E.post_id,E.owner_display_name,E.last_editor_display_name,E.last_edit_date,E.up_vote,E.down_vote,E.score,E.acc_ans_count,E.post_title,E.content_license,E.body_text,E.creation_date,E.closed_date"+
    " from posts as E,posts_tag as C "+
    " WHERE E.post_id=C.post_id and post_type_id=1; ";
    // console.log(pre_query+str+pos_query);
    conn.query(pre_query+str+pos_query, (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
      })
    //get a string and seperate into arrays and do query on words
})
router.get('/', function(req, res) {
    // const owner_name = req.params.acc_nam;
  //   const owner_name = 'Teja';
    var sql = 'select * from tags';
    conn.query(sql, function (err, data) {
    if (err) throw err;
    res.send(data)
  });
  });
module.exports = router