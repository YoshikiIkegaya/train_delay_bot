'use strict';

const Twitter = require('twitter');
const tw = new Twitter({
  consumer_key: '0NCjCikIfY3sUT0mVcZcJm6qT',
  consumer_secret: 'MxTX112TuPJXZafvdQ2Gt0Yx7el4eEym3NScIrgJuvqgzMPW5w',
  access_token_key: '828119541209198592-WuQREXst0wlbmMSlAitracYb6s3qqLP',
  access_token_secret: 'zDmLunxQRybg32IlnfnlaRcA7sy52wQUp5HQEET81N6ua'
});

tw.stream('statuses/filter', {'track': '#botawards'}, function(stream) {
  stream.on('data', function (data) {
    console.log(data.text);
  });
});
