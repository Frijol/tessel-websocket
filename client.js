// The IP address of your Tessel. Find it with `tessel wifi -l` and set it here
var ipAddress = '192.168.128.194'

var ws = require('nodejs-websocket');
var port = 8000;

// Set the binary fragmentation to 1 byte so it instantly sends anything we write to it
ws.setBinaryFragmentation(1);

// When we get a connection
var connection = ws.connect('ws://' + ipAddress + ':' + port, function() {
  console.log('Connected to server! You may start typing  into the console.');
  // Pipe the data to our server
  process.stdin.on('data', function(data) {
    // Send data
    connection.sendBinary(new Buffer(data));
  });
});
