var express = require( 'express' );
var app = express();
var http = require( 'http' ).Server( app );
var io = require( 'socket.io' )( http );

// //routing
// app.get( '/', function ( req, res ) {
//   res.sendFile( __dirname + '/public/index.html' );
// } );

app.use( express.static( 'public' ) );

//client connected
io.on( 'connection', function ( socket ) {
  console.log( 'a user connected' );
  socket.on( 'disconnect', function () {
    console.log( 'user disconnected' );
  } );
} );

http.listen( 3000, function () {
  console.log( 'listening on *:3000' );
} );