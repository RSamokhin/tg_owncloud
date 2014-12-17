var usr = process.argv[2];
var fs = require('fs');
try{
	fs.unlinkSync('tmpdir/'+usr);
}catch(e){

}finally{
	try{
		var newId = makeid();
		fs.writeFile('tmpdir/'+usr, newId);
		console.log({"data":{"message":"The ID was created","file":usr,"newId":newId},"status":"success"});
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