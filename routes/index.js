var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/healthcheck', function(req, res, next) {
  res.sendStatus(200)
});

router.get('/envCheck', function(req,res, next){
  let env_name=process.env.env_name || "test";
  console.log(env_name)
  res.send(env_name);
});

module.exports = router;
