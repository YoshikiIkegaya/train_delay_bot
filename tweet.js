'use strict';

const Twitter = require('twitter');
const tw = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
const TARGET_HASHTAG = '#イェあああ'; //ハッシュタグを指定

let tweet = (my_user_id, pushClient) => {
  tw.stream('statuses/filter', {'track': TARGET_HASHTAG}, (stream) => {
    stream.on('data', (data) => {
        let pushSendMessageObject = [{type: 'text',text: data.text}];
          pushClient([my_user_id],pushSendMessageObject)
          .then((body)=>{
              console.log(`「${data.text}」をプッシュ通知成功`);
          },(e)=>{console.log(e)});
    });
  });
};

module.exports = tweet;
