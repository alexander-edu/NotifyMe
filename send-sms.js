
var accountSid = 'AC04fdc0be2ede3af769d12956b9e260ad'; // Your Account SID from www.twilio.com/console
var authToken = '7f96cf2f864cd1a5d4daf010f6e02dae';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
//https://api.twilio.com/2010-04-01/2010-04-01/Accounts/{AccountSid}/Messages


client.messages.create({
    body: 'Hello from Node',
    to: '+17815001137',  // Text this number
    from: '+13394994950' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
