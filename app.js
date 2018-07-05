var express = require('express')
var socket = require('socket.io')

var app = express()

var server = app.listen(4000, () => {
  console.log('server is up.........!')    
})

app.use(express.static('./public'))


var io = socket(server)

io.on('connection', (socket) => {
  
  console.log('made socket connection', socket.id)    
  
  socket.on('chat', (data) => {
    io.sockets.emit('chat', data)   
  }) 
})