const http = require('http')
const bl = require('bl')
let number = 2
let result =[]
let count = 0
const callback = Response => {
    Response.pipe(bl((err,data) => {
        result[count] = data.toString()
        count++
        if(count == 3){
            for(i = 0; i<3; i++){
                console.log(result[i])
            }
        }
    }))
}
for (i=0; i<3; i++){
    http.get(process.argv[number], callback)
    number++
}
