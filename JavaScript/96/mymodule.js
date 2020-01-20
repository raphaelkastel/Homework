const fs = require("fs");
const path = require('path');
module.exports = function(dir, filter, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) {
      return callback(err);
    } else {
      list = list.filter(function (file) {
        if(path.extname(file) === `.${filter}`) return true;
    })
      return callback(null, list);
    }
  });
};
