
const spawn = require('child_process').spawn;
const fs = require('fs');
const os = require('os');
const path = require('path');

var flags = require('minimist')(process.argv.slice(2));
console.dir( flags );

const isWindows = os.type().includes('Window');

const scriptFile = flags['script-file'];
const envFile = flags['env-file'];


if ( !envFile ) { 
    throw new Error(
        'Script Launcher Error!  No env file specified.');
}

if ( !scriptFile ) { 
    throw new Error(
        'Script Launcher Error!  No script file specified.');
}


const PROJECT_PATH = process.cwd();
const SCRIPT_EXTENSION =
    !!isWindows ? '.ps1' : '.bash';

const ENV_PATH = path.resolve( PROJECT_PATH, '.env' );
const ENV_FILE_PATH = path.resolve( ENV_PATH, envFile );

const SCRIPT_PATH = path.resolve( PROJECT_PATH, 'scripts' );
const SCRIPT_FILE_PATH = path.resolve( SCRIPT_PATH, scriptFile ) + SCRIPT_EXTENSION;

console.log('Checking for .env File at: ', ENV_FILE_PATH );
if ( !fs.existsSync( ENV_FILE_PATH ) ) { 
    throw new Error('Script Launcher Error! Env File not found at: ' + ENV_FILE_PATH );
}

console.log('Checking for Script File at: ', SCRIPT_FILE_PATH );
if ( !fs.existsSync( SCRIPT_FILE_PATH ) ) { 
    throw new Error('Script Launcher Error! Script File not found at: ' + SCRIPT_FILE_PATH );
}

const child = !!isWindows
    ? spawn('powershell.exe', [SCRIPT_FILE_PATH] )
    : spawn( SCRIPT_FILE_PATH );

child.stdout.on('data', data => { 
    console.log( 'Data! ', data.toString() );
});
child.on('data', data => { 
    console.log( 'Error! ', data.toString() );
});
child.on('exit', () => { 
    console.log( 'Powershell Script Finished!')
});

      