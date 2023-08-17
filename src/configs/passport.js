const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
require('dotenv').config();

passport.use(new googleStrategy({
    // passport option
    callbackURL:"/auth/google/redirect",
    clientId:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET
},()=>{
    //passport callback function
}))