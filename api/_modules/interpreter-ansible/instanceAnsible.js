
//Read docker-composer instanceYMLFile
var instanceYMLFile = require('./instanceYMLFile')
//for write hosts
var instanceHostFile = require('./instanceHostFile')



function _spawnAnsibleProcess (mysqlFolder,externalPort,ip_resource) {

    // create docker-composer-file with params
    instanceYMLFile._instanceYMLFile(mysqlFolder,`${externalPort}:80`)
    instanceHostFile._instanceHostFile(ip_resource)
      
    let promise = new Promise((resolve,reject)=>{
        
        var errorFlag = false 
        var stdAppend = ''  
        
        const { spawn } = require('child_process')
        //const child = spawn('terraform', [command])  
        const child = spawn('ansible-playbook', ['dependencies.yml'])  
        child.stdout.on( 'data', data => {
            //console.log( `stdout: ${data}` )
            stdAppend += data.toString('utf8')
        } )
        
        child.stderr.on( 'data', data => {
            //console.log( `stderr: ${data}` )
            errorFlag = true
            stdAppend += data.toString('utf8')        
        } )
        
        child.on('close', code => {
            if(code === 0) {
                // var n = stdAppend.search("instance_public_ip_addresses_workers");
                // var clean = ''   
                // for (let index = n; index < stdAppend.length; index++) {
                //     clean += stdAppend[index];
                // }
                // var r = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/
                // clean  = clean.match(r);
                resolve(new Object({errorFlag:errorFlag,stdAppend,stdAppend}))
             }else{
                errorFlag = true
                resolve(new Object({errorFlag:errorFlag,stdAppend,stdAppend}))
               //console.log( `child process exited with code ${code}` )
             } 
        })      
    })
    
    return promise
}


exports._spawnAnsibleProcess = _spawnAnsibleProcess