const http = require('http')

const app = http.createServer((request, response)=>{
    if (request.url=='/'){
        response.writeHead(200, {"content-type": "text/plain"});
        response.end("Welcome to my Server")
    }
})
app.listen(2000, ()=>{
    console.log('Server is running on PORT: 2000')
})