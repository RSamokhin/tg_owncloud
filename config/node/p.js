var usr = process.argv[2];
var pwd = process.argv[3];
var chk = process.argv[4];

var fdata = Math.random();
fs = require('fs');
fs.readFile('tmpdir/'+usr, 'utf8', function (err,data) {
  if (err) {
	var rdata = {
						"data":{
								"message":"Системная ошибка чтения из файла, сообщите администратору"
						},
						"status":"error"
					};
    return console.log(rdata);
  }
	fdata=data.trim();
	if (fdata===chk){
		var request = require('request');
		var j = request.jar();
		var request = request.defaults({jar:j});
		request('http://localhost/owncloud/index.php', function (error, response, body) {
			if (error && response.statusCode !== 200)
				return;
			var token = /data-requesttoken="([^"]+)"/.exec(body)[1];
			request.post({url:'http://localhost/owncloud/index.php', form: {
				'user': 'rsamokhin',
				'password': 'Qsx159357',
				'timezone-offset': 3,
				'requesttoken': token
			}}, function(err, httpResponse, body){
				request('http://localhost/owncloud/index.php/settings/users', function (error, response, body) {
					var token = /data-requesttoken="([^"]+)"/.exec(body)[1];
					request.post({
						url:'http://localhost/owncloud/index.php/settings/ajax/createuser.php', 
						form: {
							'username': usr,
							'password': pwd,
							'groups': ''
						},
						headers: {
							'requesttoken': token
						}
					}, function(err, httpResponse, body){
						console.log(JSON.parse(body));
					});
				});
			});
		});
	}else{
		var rdata = {
						"data":{
								"message":"Некорректный код подтверждения, запросите код повторно"
						},
						"status":"error"
					};
		console.log(rdata);
	}
});

