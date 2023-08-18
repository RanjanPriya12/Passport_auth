const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
require('dotenv').config();

passport.use(new googleStrategy({
    // passport option for the google strategy
    callbackURL:"/auth/google/redirect",
    clientId:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET
},(accessToken,refreshToken,profile,done)=>{
    //passport callback function
}))