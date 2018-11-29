const myModule = require('./module.js');

myModule(process.argv[2], process.argv[3], function(err,list) {
    if (err){
        return console.log('there is an error ' + err);
    }else{
        return console.log(list.join('\n'));
    }
});