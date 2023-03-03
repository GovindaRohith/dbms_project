var express = require('express');
const router = express.Router()
var conn = require('./db');

// takes values from frontend and inserts into database
  router.post('/',  (req, res) => { // req.body.name is the name passed thorough placeholder
  var sql = "insert into posts(owner_display_name ,last_editor_display_name ,last_edit_date ,post_type_id ,is_accepted_answer ,up_vote ,down_vote ,score ,parent_id ,views ,acc_ans_count ,comment_count ,post_title ,content_license,body_text ,creation_date ,closed_date) values((?), (?), NOW(), 1, false, 0, 0, 0, 0, 1, 0, 0, (?), (?), (?), NOW(), NULL);";
  conn.query(sql,[req.body.name,req.body.name,req.body.tit, req.body.lisc, req.body.tex], function(err,fields){
    if(err) throw err;
   })
});

  // router.get('/', function(req, res, next) {
  // var sql='SELECT LAST_INSERT_ID();'; // post_id
  // conn.query(sql, function (err, data, fields) {
  //   if (err) throw err;
  //   res.send(data)
  //   });
  // });
  
  // router.put('/', function(req, res){
  //   var sql = "UPDATE posts SET post_title = '"+ req.body.title + "', body_text = '"+ req.body.body_text +"', content_license = '"+ req.body.lisc +"' where post_id = '"+ req.body.post_id +"' ";
  //   conn.query(sql, function(err){
  //     for (let index = 0; index < req.body.Tags.length; index++) {
  //       var sql1 = "select tag_id from tags where tag_name = " + req.body.Tags[index]+ " into @var2;insert into tag_posts values(" + req.body.post_id + ", @var2);";
  //       conn.query(sql1, function (err,res) {
  //           if(err) throw err;
  //       })
  //     }    
  //   })
  // })
  
module.exports = router;