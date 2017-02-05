'use strict';

const Twitter = require('twitter');
const tw = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

tw.stream('statuses/filter', {'track': '#botawards'}, function(stream) {
  stream.on('data', function (data) {
    console.log(data.text);
  });
});
