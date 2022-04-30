require('express-async-errors');

const express = require('express')
const app = express();
const port = 3000;

const connectDB = require('./db/index')
const productsRouter = require('./routes/product')

// Middleware
app.use(express.json())

app.use('/api/v1/products', productsRouter)


const start = async () => {
    try {
        connectDB.connect();
        app.listen(port, (req, res) => {
            console.log('Server is listening port: ' + port + '....')
        })
    } catch (err) {
        console.error(err)
    }
}

start();
