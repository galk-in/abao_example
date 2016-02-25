var hooks = require('hooks');

hooks.before('GET /users/{userId} -> 200', function(test, done) {
    test.request.params = {userId: 'alica'};
    done();
});

hooks.before('GET /users/{userId} -> 404', function(test, done) {
    test.request.params = {userId: 'bob'};
    done();
});
