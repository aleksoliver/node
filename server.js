const http = require('http')


const HOST = 'localhost'
const PORT = 5000


const server = http.createServer((req, res)=> {
    console.log('oi')

     res.end('OI Servidor rodando')
}) 

server.listen(PORT, HOST, ()=> {
    console.log(`Servidor Rodando: http://${HOST}:${PORT}/`);
})