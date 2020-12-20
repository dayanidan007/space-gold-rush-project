
const express = require('express')
const app = express()
const path = require('path')


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))



const port = 3000
app.listen((process.env.PORT || port), function() {
    console.log(`Server running on port ${port}`)
})