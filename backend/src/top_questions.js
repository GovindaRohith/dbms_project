const express = require('express')
const router = express.Router()
const path = require('path')
const db=require('./db.js')


router.get('/', function(req, res) {
  // const owner_name = req.body.owner_display_name;
  // const owner_name = 'Teja';
  var sql = 'SELECT owner_display_name, last_editor_display_name, last_edit_date, post_type_id, is_accepted_answer, up_vote, down_vote, score, views, acc_ans_count, comment_count, post_title, content_license, body_text, creation_date, closed_date from posts where post_type_id = 1 order by views DESC;';
  db.query(sql,  function (err, data) {
  if (err) throw err;
  res.send(data)
  console.log(data)
});
});

module.exports = router