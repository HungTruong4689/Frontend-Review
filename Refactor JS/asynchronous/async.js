const http = require('http')
const response = http.get('https://refactoringjs.com', (result)=>{
    result.on('data', (chunk)=>{
        console.log(chunk.toString())
    })
})
console.log(response.body)

let theResult = []
http.get('https://refactoringjs.com', (result)=>{
    result.on('data', (chunk)=>{
        theResult.push(chunk.toString())
    })
})
console.log(theResult)

setTimeout(()=>{
    console.log("the chicken")}, 2)
    console.log("the egg") //print first
    setTimeout(()=>{
        console.log("the chicken 2")}, 0)
        setTimeout(()=>{
            console.log("the chicken 3")}, 0)
           
            setTimeout(()=>{
                console.log("the chicken 4")}, 0)
                