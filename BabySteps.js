//console.log(process.argv);
let arguments = process.argv;
let sum = 0;
//console.log(arguments);
for (let i= 2; i < arguments.length; i++){
    sum += +arguments[i];
}
console.log(sum);
