const passport = require('passport');

const router = require('express').Router();

router.get('/google',passport.authenticate('google',{
    scope:["profile"]
}))

module.exports = router;