var ws = require('nodejs-websocket');
var port = 8000;

// Create the websocket server, provide connection callback
var server = ws.createServer(function (conn) {
  console.log('Accepted new connection...');

  // If get a binary stream is opened up
  conn.on('binary', function(stream) {
    // When we get data
    stream.on('data', function(data) {
      // Log the data
      console.log('Got data:', data.toString());
    });
  });

  conn.on("close", function (code, reason) {
      console.log("Connection closed")
  });
}).listen(port);

console.log('Listening on port', port);
