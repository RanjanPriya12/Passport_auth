const mongoose = require('mongoose');
require('dotenv').config();

const connect =()=>{
    return mongoose.connect(process.env.MONGO__URI).then(()=>{
        console.log("connected to database");
    }).catch(err=>{
        console.log(err);
    });
}

module.exports = connect;