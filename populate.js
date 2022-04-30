
const connectDB = require('./db/index')
const Product = require('./model/product')

const jsonProducts = require('./db.json')

const start = async () => {
    try {
        connectDB.connect();
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log("Success!!!!!!!");
        process.exit(0)
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}
start();
