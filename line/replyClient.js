'use strict';

const replyClient = (replyToken, SendMessageObject) => {
  let postDataStr = JSON.stringify({ replyToken: replyToken, messages: SendMessageObject });
  let options = {
      host: HOST,
      port: 443,
      path: REPLY_PATH,
      method: 'POST',
      headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'X-Line-Signature': SIGNATURE,
          'Authorization': `Bearer ${CH_ACCESS_TOKEN}`,
          'Content-Length': Buffer.byteLength(postDataStr)
      }
  };

  return new Promise((resolve, reject) => {
      let req = https.request(options, (res) => {
                  let body = '';
                  res.setEncoding('utf8');
                  res.on('data', (chunk) => {
                      body += chunk;
                  });
                  res.on('end', () => {
                      resolve(body);
                  });
      });

      req.on('error', (e) => {
          reject(e);
      });
      req.write(postDataStr);
      req.end();
  });
};

module.exports = replyClient;
