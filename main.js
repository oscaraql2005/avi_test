var apiai = require('apiai');
 
var app = apiai("dd0b3c75af9a4e36944b5b0621ec5de0");
 
var request = app.textRequest('<Your text query>', {
    sessionId: '<unique session id>'
});
 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end();
