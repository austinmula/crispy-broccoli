const { readFileSync, writeFileSync } = require('fs');
const { Server } = require('socket.io');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
// const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json();
const fileName = 'data.json';
const express = require('express');
const { createServer } = require('http');

let rawData = readFileSync(fileName);
let sensorData = JSON.parse(rawData);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', function (socket) {
  console.log('new user on socket', socket.id);
});

const port = new SerialPort({
  path: 'COM3',
  baudRate: 9600,
  autoOpen: false,
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

port.open(function (err) {
  if (err) {
    return console.log('Error opening port: ', err.message);
  }
  port.write('main screen turn on');
});

port.on('open', function () {
  console.log('serial port is open');
});

parser.on('data', function (data) {
  let str = data.toString();
  str = JSON.stringify(data);
  str = JSON.parse(data);
  str = { ...str, date: Date.now() };
  console.log(str);

  try {
    sensorData.push(str);
    writeFileSync(fileName, JSON.stringify(sensorData, null, 2));
  } catch (error) {
    console.log(error.message);
  }

  io.emit('arduino-data', str);
});

port.on('error', function (error) {
  console.log(error.message);
});

httpServer.listen(3002);
