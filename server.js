const express = require('express')

const app = express()

app.listen(4000, () => {
    console.log('app is listening to port 4000')
})

//routes
app.get('/Movies', (req, res) => {
    res.json({mssg: "welcome to my MongoDB Api"})
})