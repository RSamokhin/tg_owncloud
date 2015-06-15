var crypto = require('crypto');

var exec = require('child_process').exec,
child;

child = exec('/var/www/html/config/node/edsGetAllFilesCrtimeByAuthor.sh', {
	encoding: 'utf8'
	},
	function (error, stdout, stderr) {
		if ((stderr!==null)||(stderr!="null")||(stderr!=null))
		{
			console.log(stderr);
		}
		var fs = require('fs');
		fs.readFile('/var/www/data/out.txt', function(err, data){
			if (err)
			{
				console.log(err);
				throw err;
			}
			
			var strs = data.toString().split('\n');
			//console.log (strs.length);
			
			iter = 0;
			var files = new Array();
			
			while (iter<strs.length) {
				var author = strs[iter];
				iter++;
				while ((iter<strs.length)&&(strs[iter]!="")&&(strs[iter].length>1)){
					var file = new Object();
					file.author = author;
					file.name = strs[iter];
					iter++;
					file.date = new Date(strs[iter]);
					var cipher = crypto.createCipher('aes256',author);
					var crypted = cipher.update(strs[iter],'utf8','hex');
					crypted += cipher.final('hex');
					file.crypted = crypted;
					iter++;
					files.push(file);
				}
				iter++;
			}
			
			fs.writeFile('/var/www/html/config/node/txt/files.txt', JSON.stringify(files), function(err){
				if (err)
					console.log(err);
			});
			
			
		});
	});