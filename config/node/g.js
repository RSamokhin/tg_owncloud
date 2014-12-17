var usr = process.argv[2];
var fs = require('fs');
try{
	fs.unlinkSync('tmpdir/'+usr);
}catch(e){

}finally{
	try{
		var newId = makeid();
		var stream = fs.createWriteStream('tmpdir/'+usr);
		stream.once('open', function(fd) {
		  stream.write(newId);
		  stream.end();
		});
		console.log({"data":{"message":"ID был создан","file":usr,"newId":newId},"status":"success"});
	}catch(e){
		console.log({"data":{"message":e},"status":"error"})
	}
}
function makeid(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}