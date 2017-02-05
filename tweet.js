'use strict';

const Twitter = require('twitter');
const tw = new Twitter({
  consumer_key: '0NCjCikIfY3sUT0mVcZcJm6qT',
  consumer_secret: 'MxTX112TuPJXZafvdQ2Gt0Yx7el4eEym3NScIrgJuvqgzMPW5w',
  access_token_key: '828119541209198592-WuQREXst0wlbmMSlAitracYb6s3qqLP',
  access_token_secret: 'zDmLunxQRybg32IlnfnlaRcA7sy52wQUp5HQEET81N6ua'
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
