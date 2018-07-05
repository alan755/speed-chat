var socket = io.connect('http://localhost:4000')

var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      button = document.getElementById('send'),
      output = document.getElementById('output')

button.addEventListener('click', () => {
       
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  })  
  message.value = ""  
})

socket.io('chat', (data) => {
      output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
}) 
   