let BuyoRequest = require('../models/buy').BuyRequest;
let uniqid = require('uniqid');
let express =  require('express');
let router = express.Router();
let authMiddleware = require('../middleware/auth');
const { BuyRequest } = require('../models/buy');

//getting all requests from DB
router.get('/submit', authMiddleware, async (req,res) =>{
    res.send(await BuyoRequest.find());
});

//Creating requests in DB
router.post('/submit', async (req, res) =>{
    let reqBody = req.body;
    let newRequest = new BuyRequest({
        id: uniqid(),
        fn: reqBody.fn,
        mn: reqBody.mn,
        ln: reqBody.ln,
        dateD: reqBody.dateD,
        dateR: reqBody.dateR,
        payId: reqBody.payId
    })
    await newRequest.save();
    res.send({
        redirectURL: '/'
    });
});

//Deleting request 
router.delete('/submit:id', authMiddleware, async (req,res) =>{
    await BuyRequest.deleteOne({id: req.params.id});
    res.send('Deleted!');
});

module.exports = router;