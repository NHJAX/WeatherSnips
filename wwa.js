

var req = require('request');

request.post({
   url: 'https://alerts.weather.gov/cap/wwaatmget.php?x=FLC031&y=1',
   json: true,
   headers: {
      'User-Agent': 'NMRTC WEATHER APP',
      'Content-Type' : 'application/ld+json'
   },
   method: 'POST'
 })

 request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
