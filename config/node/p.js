var request = require('request');

var j = request.jar();
var request = request.defaults({jar:j});

request('http://192.168.1.41/owncloud/index.php', function (error, response, body) {
	if (error && response.statusCode !== 200)
		return;
		
	var token = /data-requesttoken="([^"]+)"/.exec(body)[1];
	
	request.post({url:'http://192.168.1.41/owncloud/index.php', form: {
		'user': 'rsamokhin',
		'password': 'Qsx159357',
		'timezone-offset': 3,
		'requesttoken': token
	}}, function(err, httpResponse, body){

		request('http://192.168.1.41/owncloud/index.php/settings/users', function (error, response, body) {
			var token = /data-requesttoken="([^"]+)"/.exec(body)[1];
			
			request.post({
				url:'http://192.168.1.41/owncloud/index.php/settings/ajax/createuser.php', 
				form: {
					'username': 'test' + Math.random(),
					'password': 'test',
					'groups': ''
				},
				headers: {
					'requesttoken': token
				}
			}, function(err, httpResponse, body){
				console.log(body);
			});
		});
	});
});
