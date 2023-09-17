const http = require('http')

const server = http.createServer((request,response) => {
    console.log('request event');
    response.end('hello world')
})

server.listen(5000, () => {
    console.log('Server is listening on port: 5000');
})