<?php
    $scriptName = htmlspecialchars($_GET["sname"]);
    $scriptData = htmlspecialchars($_GET["sdata"]);
    //echo 'scriptname = '.$scriptName.'<br>';
    //echo 'scriptdata = '.$scriptData.'<br>';
    switch ($scriptName) {
    case 'srgGenerateNewKeyForUser':
        //echo 'cmd: '."nodejs /var/www/owncloud/config/node/srgGenerateNewKeyForUser.js ".$scriptData.'<br>';
        $msg = runScript("nodejs /var/www/owncloud/config/node/srgGenerateNewKeyForUser.js ".$scriptData);
        echo $msg;
        break;
    case 'srgCreateNewUser':
        $params = (strtr($scriptData, ",", " "));
        //echo 'cmd: '."nodejs /var/www/owncloud/config/node/srgCreateNewUser.js ".$params.'<br>';
        $msg = runScript("nodejs /var/www/owncloud/config/node/srgCreateNewUser.js ".$params);
        echo $msg;
        break;
    case 'srgChangeUsersPwd':
        $params = (strtr($scriptData, ",", " "));
        //echo 'cmd: '."nodejs /var/www/owncloud/config/node/srgChangeUsersPwd.js ".$params.'<br>';
        $msg = runScript("nodejs /var/www/owncloud/config/node/srgChangeUsersPwd.js ".$params);
        echo $msg;
        break;
}
    

      
      
function runScript($scriptString)
{
    $message=shell_exec("$scriptString");
      return ($message);
}