var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const usersList = ['alica'];
    res.status(200).json(usersList);
});

router.get('/alica/', function(req, res, next) {
    const user = {firstName: 'Alica', lastName: 'Smith'};
    res.status(200).json(user);
});

router.get('/bob/', function(req, res, next) {
    res.sendStatus(404);
});
module.exports = router;
