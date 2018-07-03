var express = require('express')
var app = express()

var server = app.listen(process.env.port || 4000, () => {
  console.log('server is up.........!')    
})

app.use(express.static('./public'))