let auth = require('../controllers/auth');

function checkAuth2(req, res, next) {
    let token = req.cookies['user_token'];
    if(token && auth.checkToken(token)){
        next(); //next func will be executed
    }else{
        res.status(400);
        res.send('Not authorized!');
    }
}

module.exports = checkAuth2;