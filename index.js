const express = require('express');
const authRoute = require('./src/routes/auth.route');
const passportSetUp = require('./src/configs/passport');
const connect = require('./src/configs/db');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(express.json());
app.get("/",(req,res)=>{
    return res.status(200).send(`<h3>Welcome to passport authentication project</h3>`)
})
app.use('/auth',authRoute);

app.listen(port,async()=>{
    try {
        await connect();
        console.log(`application start listening at http://localhost:${port}`);
    } catch (error) {
        console.log(error);
    }
})