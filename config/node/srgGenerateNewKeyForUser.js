/* 
 * Generates new token for user registration or password restore.
 * Check for allowed domain added
 * Example: nodejs ./srgGenerateNewKeyForUser.js rsamokhin@telecomguard.ru
 */
var data = require('/var/www/owncloud/config/node/srgConfigData.js');
var usr = process.argv[2];
var allowedEmailDomain = false;
for(i = 0 ; i < cData.data.allowedEmailDomains.length;i++){
    if (usr.substring(usr.length-cData.data.allowedEmailDomains[i].length)===cData.data.allowedEmailDomains[i]){
        allowedEmailDomain=true;
        break;
    } 
}
if (allowedEmailDomain){
    var fs = require('fs');
    try{
            fs.unlinkSync('/var/www/owncloud/config/node/tmpdir/'+usr);
    }catch(e){

    }finally{

            try{
                    var newId = makeid();
                    /*fs = require('fs');
                    var stream = fs.createWriteStream('/var/www/owncloud/config/node/tmpdir/'+usr);
                    stream.once('open', function(fd){
                      stream.write(newId);
                      stream.end();
                    });*/
                    fs = require('fs');
                    fs.writeFileSync('/var/www/owncloud/config/node/tmpdir/'+usr, newId);
                    console.log({"data":{"message":"Token was successfully created","file":usr,"newId":newId},"status":"success"});
            }catch(e){
                    console.log({"data":{"message":e},"status":"error"});
            }
    }
}else{
    var rdata = {
                    "data":{
                    "message":"User address must be  the same, as email from allowed domain ( "+ cData.data.allowedEmailDomains.toString() + " )"
                },
            "status":"error"
        };
    console.log(rdata);
    
}
function makeid(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}