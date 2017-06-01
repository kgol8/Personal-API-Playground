var socket = io.connect();

socket.once('connect', function (connectionInstance) {
    console.log('Connected');
});

socket.on('console_log', function (text) {
  console.log(text);  
});

