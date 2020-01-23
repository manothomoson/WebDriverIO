var outlook = require('node-outlook');

// Set the API endpoint to use the v2.0 endpoint
outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0');

// This is the oAuth token
var token = 'eyJ0eXAiOiJKV1Q...';

// Set up oData parameters
var queryParams = {
  '$select': 'DisplayName, EmailAddress',
};

outlook.base.getUser({token: token, odataParams: queryParams},
  function(error, result) {
    if (error) {
      console.log('getUser returned an error: ' + error);
    }
    else if (result) {
      console.log('User name:', result.DisplayName);
      console.log('User email:', result.EmailAddress);
    }
  });
