const request = require('request');
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWU1ZDEyN2EyNDhiZjE1ZmZmMjI5YTVmIiwic2tpbGxfaWQiOiJhcGlfdG9rZW4iLCJpYXQiOjE1OTkwNDk3NjV9.BzqHfO6CsCxe1Ti7ZCS1TupI07QVWEURNTKZLPT7wt8"
const urlGeneral = "https://apis-virtual-agent-enriched.smartly.ai"
const botId = '5f217183b45c147225ef806d';


async function requestSender(url, token){
 const options = {
  method: 'GET',
  url: url,
  headers: {
    accept: 'application/json',
    authorization: token
  }
};
request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
  return body
});
}


//GET THE INTENTS
async function getIntent( urlGeneral,token, botId){
  const url = urlGeneral + "/bots/" + botId;
  const response = await requestSender(url, token);
  console.log(response);
}


 //getIntent( urlGeneral,token, botId );
 async function getIntentById(urlGeneral,token,intentId){
   const url = urlGeneral + "/intent/" + intentId;
  const response = await requestSender(url, token);
 }





 function dialogWithBot(){
   //send firt event_name: 'NEW_DIALOG_SESSION', 
   //Next you can send  event_name: 'NEW_INPUT' : to send the message and get the response 
   //Finally you can send to end the conversation event_name: 'END_SESSION',
  const options = {
    method: 'POST',
    url: urlGeneral + "/dialog/",
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWU1ZDEyN2EyNDhiZjE1ZmZmMjI5YTVmIiwic2tpbGxfaWQiOiJhcGlfdG9rZW4iLCJpYXQiOjE1OTkwNDk3NjV9.BzqHfO6CsCxe1Ti7ZCS1TupI07QVWEURNTKZLPT7wt8'
    },
    body: {
      event_name: 'NEW_INPUT',
      platform: 'simulator',
      skill_id: '5f217183b45c147225ef806d',
      input: 'Hello',
      lang: 'fr-fr',
      user_id: '5f2171856252a8f7f4388f60'
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body.intent);
  });
 }
 
 dialogWithBot()

 