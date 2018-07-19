
const http = require('http')

var server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.end('Hello WOrld')
})

server.listen(3000)

console.log('server running at 3000...')

server.on('connection', (socket) => {
    console.log('New Connection')
})
