var express = require('express');
var app = express();
var hbs = require('hbs');


/*set template engine*/
app.set('view engine','html');
app.engine('html',hbs.__express);

/*assets*/
app.use(express.static('public'));

/*Routes*/
app.get('/', function(req, res){
	res.render('index');
});

/* Determinamos el puerto*/
app.listen(3000, function(){
	console.log('Node Server Running');
});