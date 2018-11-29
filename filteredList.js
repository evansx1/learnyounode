var fs = require('fs')
let lista = undefined
let path = require('path')
fs.readdir(process.argv[2], function (err, list) {
    console.log(list)
    list.forEach(function (file) {
      if (path.extname(file) === '.dat')
        console.log(file)
    })
}) 

