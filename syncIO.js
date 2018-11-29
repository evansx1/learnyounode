var fs = require('fs');
let buffer =(fs.readFileSync(process.argv[2])).toString();
console.log(buffer.split('\n').length - 1);
