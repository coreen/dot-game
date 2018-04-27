const express = require('express')
let app = express()

app.use(express.static(__dirname + '/js'))
app.use(express.static(__dirname + '/styles'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html')
})

app.listen(3000)