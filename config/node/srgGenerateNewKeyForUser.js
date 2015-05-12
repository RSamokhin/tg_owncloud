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
            fs.unlinkSync('/var/www/tmpdir/'+usr);
    }catch(e){

    }finally{

            try{
                    var newId = makeid();
                    fs = require('fs');
                    fs.writeFileSync('/var/www/tmpdir/'+usr, newId);
                    var sESR = require('/var/www/owncloud/config/node/srgExternalScriptsRunner.js');
                    
                    var exec = require('child_process').exec,
                        child;

                    child = exec('/var/www/owncloud/config/node/srgSendMailBash.sh '+cData.data.smtpMailRelayServerAddress+' '+cData.data.smtpMailRelayServerPort+' '+cData.data.mailSender+' '+usr+' "'+cData.data.mailConfirmationSubject+'" "'+cData.data.mailConfirmationBody+newId+'"',
                      function (error, stdout, stderr) {
                        console.log({"data":{"message":"Token was successfully created","file":usr/*,"newId":newId*/},"status":"success"});
                        if (error !== null) {
                        }
                    });
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
    console.log(JSON.stringify(rdata));
    
}
function makeid(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}