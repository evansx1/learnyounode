//crear un servidor http que lectura

var http = require('http')
var map = require('through2-map')
var port = +process.argv[2]
let datos =""

let server = http.createServer((request, respond)=>{
    if(request.method === 'POST'){
        request.on('data', chunk =>{
            return datos += chunk
        })
        request.on('end', ()=>{
            datos= datos.toUpperCase()
            respond.end(datos)
        })
    }else{
        return respond.end('it is not a post request')
    }
})

server.listen(port)


