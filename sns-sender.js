'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });// must specify region to publish

const message = process.argv[2];//after first two words-type message in terminal

const sns = new AWS.SNS();

//in order to publish we need the topic we want to publish
const topic = 'arn:aws:sns:us-east-1:767138571943:pickup'//arn for the topic from AWS

const payload = {
  Message: message,
  TopicArn: topic,
}

sns.publish(payload, (err, data) => {
  if (err){
    console.log(err);
  }
  console.log(data);
});
