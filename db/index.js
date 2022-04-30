const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/store_api');
        console.log("Success");
    } catch (err) {
        console.log("Fail");
    }
}

module.exports = {connect};
