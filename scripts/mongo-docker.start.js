
const exec = require('child_process').exec;
const os = require('os');
const path = require('path');

const osType = os.type();

const PROJECT_PATH = process.cwd();

const scriptFileName = osType.includes('Window')
  ? 'mongo-docker-start.ps1' // windows
  : 'mongo-docker-start.bash'; // everything else

const scriptPath =
  path.resolve( PROJECT_PATH, 'scripts', scriptFileName );

console.log( scriptPath );



//
//
// const myShellScript = exec('sh doSomething.sh /myDir');
// myShellScript.stdout.on('data', (data)=>{
//   console.log(data);
//   // do whatever you want here with data
// });
// myShellScript.stderr.on('data', (data)=>{
//   console.error(data);
// });
