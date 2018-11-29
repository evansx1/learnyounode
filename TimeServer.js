//crear un servidor tcp con el module net de js que escriba la hora
//en el servidor y luego pueda ser visualizado

const net = require('net')
const port = +process.argv[2]
let date =new Date()
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
let hours = date.getHours()
let minutes = date.getMinutes()
if (day.length <2){
    day = '0' + day
}
month= +month + 1
month= month.toString()
let serverTime =`${year}-${month}-${day} ${hours}:${minutes}\n`
var server = net.createServer(socket => {
    //socket.write(serverTime)
    socket.end(serverTime)
})
server.listen(port)