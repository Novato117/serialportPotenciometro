const SerialPort = require('serialport').SerialPort;
const { DelimiterParser } = require('@serialport/parser-delimiter');
//constructing a serialport objetc inmmediately opens a port
const puerto = new SerialPort({
    path: 'COM3', //path to serial port
    baudRate: 9600
});
const parser = puerto.pipe(new DelimiterParser({ delimiter: '\n' }));

/*parser.on('open', function () {
    console.log('Conexion abierta');
});*/
parser.on('data', function (data) {
    var enc = new TextDecoder();
    var arr = new Uint8Array(data);
    ready = enc.decode(arr)
    //console.log('Data;', data);
    console.log(ready)
})
puerto.on('error', function (err) {
    console.log(err);
});