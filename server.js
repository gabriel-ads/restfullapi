const express = require('express')
const routes = require('./src/routes')
const app = express()
const port = process.env.PORT || 5555
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json())

app.use(morgan('dev'))
app.use(routes)


app.use((err, req, res, next) => {
    res.status(err.status || 500)
    return res.send({
        error: {
            message: err.message
        }
    })
})

app.listen(port, err => {
    if (err) console.log(`Não startou ${err}`)
    console.log('Running on port', port)
})