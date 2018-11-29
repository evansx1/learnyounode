const http = require('http')
const callback = function(response){
    response.setEncoding('utf8')
    response.on('data', data =>{
        console.log(data);
    } )
    response.on('error', error => {
        console.log(`there is an error ${error}`)
    })
}
http.get(process.argv[2], callback)