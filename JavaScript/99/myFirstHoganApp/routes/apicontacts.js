// cant seem to get the local contacts
var express = require('express');
var router = express.Router();
let contacts = [{name:'bob'},{name:'joe'},{name:'tom'}]
router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.app.locals.contacts));
  });

module.exports = router;
