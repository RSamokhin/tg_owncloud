<?php
    $scriptName = htmlspecialchars($_GET["sname"]);
    $scriptData = htmlspecialchars($_GET["sdata"]);

    switch ($scriptName) {
        case 'srgGenerateNewKeyForUser':
            $msg = runScript("nodejs /var/www/owncloud/config/node/srgGenerateNewKeyForUser.js ".$scriptData);
            echo $msg;
            break;
        case 'srgCreateNewUser':
            $params = (strtr($scriptData, ",", " "));
            $msg = runScript("nodejs /var/www/owncloud/config/node/srgCreateNewUser.js ".$params);
            echo $msg;
            break;
        case 'srgChangeUsersPwd':
            $params = (strtr($scriptData, ",", " "));
            $msg = runScript("nodejs /var/www/owncloud/config/node/srgChangeUsersPwd.js ".$params);
            echo $msg;
            break;
    }
    function runScript($scriptString){
        $message=shell_exec("$scriptString");
        return ($message);
    }