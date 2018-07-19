
const http = require('http')

const server = http.createServer((req,res) => {
    if( req.url === '/' ) {
        res.write('Hello World')
        res.end()
    } 
    else if( req.url === '/json' ) {
        res.write(JSON.stringify({a:'b',c:'d',e:'f'}))
        res.end()
    }
})

server.on('connection', (socket) => {
    console.log('New Connection')
})

server.listen(3000)

console.log('Listening on 3000...')