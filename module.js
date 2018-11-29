const fs = require('fs');
const path = require('path');

const myModule = function(dir, ext, cb) {
    fs.readdir(dir, function(err, list) {
      if(err){
        return cb(err);
      }else{
        return cb(null,list.filter(file =>
          path.extname(file) === '.' + ext))
      }
    });
};

module.exports = myModule;