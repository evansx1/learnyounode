//crear un servidor http y leer un archivo que se encuentra alli en el servidor
//el modulo fs tiene un metodo de lectura para leer los archivos como stream de datos
//el metodo pipe recibe los chucks del stream y concatena la informacion

const fs = require('fs')
const http = require('http')
const port = +process.argv[2]
const file = process.argv[3]
var server = http.createServer((request, response)=>{
    fs.createReadStream(file).pipe(response)
})
server.listen(port)