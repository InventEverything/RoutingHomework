var express = require('express');
const router = express.Router();

var data = [
    { id: 0, name: "Aaron", username: "userA" },
    { id: 1, name: "Baxter", username: "userB" },
    { id: 2, name: "Cloyd", username: "userC" }
];

router.get('/person', function(req, res, next) {
    res.status(200);
    res.send(data);
});
// check lecture 10-14-24 for rewrite of filter method to index of method
// put if statements to verify correct information before giving a response
router.get('/person/:id', function(req, res, next) {
    let index = data.findIndex(person => person.id == req.params.id);

    if (index >= 0){
        res.send(data[index]);
        res.status(200);
    } else {
        res.status(404);
        res.json({message: "index not found"});
    }
});

router.post('/person', function(req, res, next) {
    // note we are adding any data sent to the endpoint to the array. this really needs some checking.
    res.status(200);
    data.push(req.body);
    res.send(req.body);
});

router.put('/person/:id', function(req, res, next) {
    // note we are adding any data sent to the endpoint to the array. this really needs some checking.
    let index = data.findIndex(person => person.id == req.params.id);

    if (index >= 0){
        res.status(200);
        data[index] = req.body;
        res.send(data[index]);
    } else {
        res.status(404);
        res.json({message: "index not found"});
    }
});

router.delete('/person/:id', function(req, res, next) {
    let index = data.findIndex(person => person.id == req.params.id);
    if(index >= 0){
        res.status(200);
        data = data.filter(person => person.id != req.params.id);
        res.json({message: "index removed"});
    } else {
        res.status(404);
        res.json({message: "index not found"});
    }
 });
 
module.exports = router;