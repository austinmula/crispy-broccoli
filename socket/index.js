require('dotenv').config();
const { readFileSync, writeFileSync } = require('fs');
const { Server } = require('socket.io');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const fileName = 'data.json';
const express = require('express');
const { createServer } = require('http');
const db = require('./db');

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
  path: 'COM4',
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

parser.on('data', async function (data) {
  let str = data.toString();
  str = JSON.stringify(data);
  str = JSON.parse(data);
  str = { ...str, date: Date.now() };
  console.log(str);

  try {
    const res = await db.query(
      'INSERT INTO sensor_data (temperature, humidity, WL, FS, motion) values ($1, $2, $3, $4, $5)',
      [str.temperature, str.humidity, str.WL, str.FS, str.Motion]
    );
    console.log(res.rows);
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
