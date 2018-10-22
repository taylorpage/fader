var express = require( 'express' );
var app = express();
var path = require( 'path' );

app.use( '/', express.static(__dirname + '/src/demo'));
app.get( '/', function( req, res ) {
  res.sendFile( path.join( __dirname + '/src/demo/demo.html' ));
});

app.listen( 8000 );
