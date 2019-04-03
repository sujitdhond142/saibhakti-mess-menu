// coded by S.P.D.
var fetch = require('node-fetch')
var cheerio = require('cheerio');

fetch('http://saibhaktimess.com')
	.then( (r) => r.text())
	.then( (body) => {
		$ = cheerio.load(body);
		$('div.well div div.col-md-3').each(function(i,item){
			console.log((i+1)+". "+$(item).text().trim());
		});
	});
