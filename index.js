const express = require('express');
const authRoute = require('./src/routes/auth.route');
const passportSetUp = require('./src/configs/passport');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(express.json());
app.get("/",(req,res)=>{
    return res.status(200).send(`<h3>Welcome to passport authentication project</h3>`)
})
app.use('/auth',authRoute);

app.listen(port,()=>{
    console.log(`application start listening at http://localhost:${port}`);
})