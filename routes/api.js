var express = require('express');
var router = express.Router();

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
    res.status(200);
    res.send(data.filter(person => {
       person.id === req.params.id
    }));
});

router.post('/person', function(req, res, next) {
    // note we are adding any data sent to the endpoint to the array. this really needs some checking.
    res.status(200);
    data.push(req.body);
    res.send(req.body);
});

router.put('/person/:id', function(req, res, next) {
    // note we are adding any data sent to the endpoint to the array. this really needs some checking.
   res.status(200);

   var index = data.indexOf(person => {
     return person.id === req.params.id;
   });

   data[index] = req.body;
   res.send(data[index]);
});

router.delete('/person/:id', function(req, res, next) {
    res.status(200);
    data[index] = data.filter(person => person.id != req.params.id);
    res.send(data[index]);
 });
 
module.exports = router;