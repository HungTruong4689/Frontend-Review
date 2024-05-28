const http = require('http')
const response = http.get('https://refactoringjs.com', (result)=>{
    result.on('data', (chunk)=>{
        console.log(chunk.toString())
    })
})
console.log(response.body)