var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.header('Access_Control_Allow_Origin', '*');
  var querydata=url.parse(req.url,true).query;
  var config={
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'twitter'
  }
  var connection=mysql.createConnection(config);
  connection.connect();
 // var myQuery="insert into login(first_name, password)values('"+querydata.firstname+"','"+querydata.passworduser+"')";
 var myQuery="select * from login";
  connection.query(myQuery,
      function (err,rows,fields) {
      if(err){
        //res.send('error cannot added');
        res.send("{'msg':'error cannot added'}");
      }else{
        //res.send('data s added')
        res.send(rows);
      }
  });
  connection.end();
});

module.exports = router;
