let User = require('../models/user_login').LoginUser;
let express =  require('express');
let router = express.Router();
let bcrypt = require('bcrypt');
let auth = require('../controllers/auth');
const { LoginUser } = require('../models/user_login');

router.post('/login', async (req, res) =>{
    let email = req.body.email;
    let password = req.body.password;
    let user = await LoginUser.find().where({email:email});    
   // console.log(user);
    if(user.length>0) {
        let comparisonResult = await bcrypt.compare(password, user[0].password);
        if(comparisonResult){
            let token = auth.generateToken(user[0]);
           //name of the key:auth_token , value:token
            res.cookie('user_token', token); //This token (auth_token) is automaticaaly sent for the client 
           // res.send(token);
           // res.send('Logged In');
           res.send({
               redirectURL: '/'
           });
        }else{
            res.status(400);
            res.send('Rejected');
        }
    }else{
        res.status(400);
        res.send('Rejected');
    }
})

router.post('/register', async (req, res) =>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let user = await LoginUser.find().where({email:email});    
    //if this email hasnt been used someone else then add this email to the DB.
    if(user.length===0) {
        let encryptedPass = await  bcrypt.hash(password, 12) //Async func
        let newUser = new LoginUser({
            name: name,
            email:email,
           password: encryptedPass
        })
        await newUser.save();
        res.send('Done');
    }else{
        res.send('Rejected');
    }
})


module.exports = router;