// require the Dialogflow library
const dialogflow = require('dialogflow');

// create a new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath('[PROJECT_ID]', '[SESSION_ID]');

// function to send a request to the chatbot
const request = (query) => {
  // create the request
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // the query to be sent to the chatbot
        text: query,
        // the language of the query
        languageCode: 'en-US'
      }
    }
  };

  // send the request and return the response
  return sessionClient
    .detectIntent(request)
    .then(responses => {
      return responses[0].queryResult;
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

// send a request to the chatbot
request('Hello, how are you?').then(response => {
  // print the chatbot's response
  console.log(response.fulfillmentText);
});
