var socket = io.connect('http://127.0.0.1:3001');

$('form').submit(function() {
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});

socket.on('chat message', function(msg) {
    $('#messages').append($('<li>').text(msg));
});