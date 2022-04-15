'use strict';

const { Consumer } = require('sqs-consumer');
const { Producer } = require('sqs-producer');

const producer = Producer.create({
  queueURL
})

const app = Consumer.create({
  queueUrl: 'grab-from-aws-sqs',
  handleMessage: (message) => {
    let body = JSON.parse(message.Body)
    console.log(body.Message);
  }
});

app.start();