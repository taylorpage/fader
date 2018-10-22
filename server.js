var express = require( 'express' );
var app = express();
var path = require( 'path' );

app.get( '/', function( req, res ) {
  res.sendFile( path.join( __dirname + '/demo/demo.html' ));
});

app.listen( 8000 );
