let CallbackRequest = require('../models/subscription').EmailRequest;
let uniqid = require('uniqid');
let express =  require('express');
let router = express.Router();
let authMiddleware = require('../middleware/auth');
const { EmailRequest } = require('../models/subscription');

//getting all requests from DB
router.get('/', authMiddleware, async (req,res) =>{
    res.send(await EmailRequest.find());
});

//Creating requests in DB
router.post('/', async (req, res) =>{
    let reqBody = req.body;
    let newRequest = new EmailRequest({
        id: uniqid(),
        email: reqBody.email,
        date: new Date()
    })
    await newRequest.save();
    res.send('Accepted!');
});

//Deleting request 
router.delete('/:id', authMiddleware, async (req,res) =>{
    await EmailRequest.deleteOne({id: req.params.id});
    res.send('Deleted!');
});

module.exports = router;