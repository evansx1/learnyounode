const bl = require('bl')
const http = require('http')
let buffer = undefined
const callback = response => {
    response.setEncoding('utf8')
    response.pipe(bl((err,data)=>{
        data= data.toString()
        console.log(data.length)
        console.log(data)

    }))
}
http.get(process.argv[2], callback)
