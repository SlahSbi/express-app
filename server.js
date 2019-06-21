const express = require('express')
const app = express()

d = new Date().getHours();
(d > 8 & d < 17) ? app.use(express.static(__dirname + '/public')) : app.get('*', (req, res) => {
    res.send('<h1>Our office is not open now</h1>')
})


app.listen(3000, (err) => {
    if (err) console.log("Server is not runing")
    else console.log("Server is runing on port 3000")

})

