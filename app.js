var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var htmlData =
{
	pictures:
	['2Q==-1.jpg','2Q==.jpg','9k=.jpg','9k=-1.jpg','9k=-2.jpg','9k=-3.jpg','Z-1.jpg','Z-2.jpg','Z-3.jpg','Z-4.jpg','Z-5.jpg','Z.jpg'],
	title:
		['PAPERLIFE','TREE OF JUSTICE','DREAM OF ART','WHERE IS MY RING','COCOPUN','SHADOW CIRCUS','I²SCIENCE','TIME','UNANUS','RUNNING RABBIT','Island of Sorcery','Morz'],

}

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});
app.get('/', function(req, res) {
	res.render('index',htmlData);
});
app.listen(port);
