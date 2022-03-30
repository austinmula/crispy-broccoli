const { Server } = require('socket.io');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const io = new Server(3002, {
  /* options */
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
  str = data.toString();
  str = JSON.stringify(data);
  str = JSON.parse(data);
  str = { ...str, date: Date.now() };
  console.log(str);

  io.emit('arduino-data', str);
});

// port.on('data', function () {
//   //   str = data.toString();
//   //   str = JSON.stringify(data);
//   //   str = JSON.parse(data);

//   //   console.log(str);
//   io.emit('arduino-data', () => {});
// });

port.on('error', function (error) {
  console.log(error.message);
});
