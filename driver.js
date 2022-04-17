'use strict';

const { Consumer } = require('sqs-consumer');
const { Producer } = require('sqs-producer');
const Chance = require ('chance');
const chance = new Chance();

const producer = Producer.create({
  queueURL
})

const app = Consumer.create({
  queueUrl: 'https://sqs.us-east-1.amazonaws.com/767138571943/packages.fifo',
  handleMessage: (message) => {
    let body = JSON.parse(message.Body);
    let parsedData = JSON.parse(body.Message); 
    console.log(parsedData);
  }
});

app.start();