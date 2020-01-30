var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Express',
    partials: { content: 'contacts' }
  });
});
/*router.get('/api/contacts', function (req, res, next) {
    return JSON.stringify(contacts)
  });*/

module.exports = router;
