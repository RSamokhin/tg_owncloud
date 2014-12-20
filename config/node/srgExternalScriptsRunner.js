/*
 *Script for running external bash bommands
 *Example: nodejs srgExternalScriptsRunner.js 'ls' '["/"]'
*/
try{
    var cmd = process.argv[2];
    var params = JSON.parse(process.argv[3]);
    run_cmd( cmd, params, function(text) { console.log (text) });
}catch(e){
    console.log('Incorrect input params');
}

function run_cmd(cmd, args, callBack ) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) { resp += buffer.toString() });
    child.stdout.on('end', function() { callBack (resp) });
} 
