const passport = require('passport');

const router = require('express').Router();

router.get('/google',passport.authenticate('google',{
    scope:["profile"]
}
));

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    return res.status(200).send("You are reached to redirect URI");
})

module.exports = router;