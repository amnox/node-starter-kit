
const http = require('http')
const url = require('url')

var server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query
    var txt = q.year + " " + q.month;
    res.end(txt);
})

server.listen(3000)

console.log('Server Running on 3000')

server.on('connection', (socket) => {
    console.log('New Connection')
})