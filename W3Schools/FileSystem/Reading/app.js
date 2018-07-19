
const http = require('http')
const fs = require('fs')

var server = http.createServer((req, res)=>{
    fs.readFile('index.html',(err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()
    })
})

server.listen(3000)

console.log('Running Server on: 3000')

server.on('connection',(socket)=>{
    console.log('New Client Connection')
})