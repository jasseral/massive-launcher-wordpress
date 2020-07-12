function _spawnTerraformProcess (command) {
   
    let promise = new Promise((resolve,reject)=>{
        
        var errorFlag = false 
        var stdAppend = ''  
        
        const { spawn } = require('child_process')
        //const child = spawn('terraform', [command])  
        const child = spawn('terraform', [command,'--auto-approve','_modules/interpreter-terraform/shared'])  
        child.stdout.on( 'data', data => {
            //console.log( `stdout: ${data}` )
            stdAppend += data.toString('utf8')
        } )
        
        child.stderr.on( 'data', data => {
            //console.log( `stderr: ${data}` )
            errorFlag = true
            stdAppend += data        
        } )
        
        child.on('close', code => {
            if(code === 0) {
                var n = stdAppend.search("instance_public_ip_addresses_workers");
                var clean = ''   
                for (let index = n; index < stdAppend.length; index++) {
                    clean += stdAppend[index];
                }
                var r = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/
                clean  = clean.match(r);
                resolve(new Object({errorFlag:errorFlag,stdAppend,stdAppend,clean:clean}))
             }else{
                errorFlag = true
                resolve(new Object({errorFlag:errorFlag,stdAppend,stdAppend,clean:clean}))
               //console.log( `child process exited with code ${code}` )
             } 
        })      
    })
    
    return promise
}

exports._spawnTerraformProcess = _spawnTerraformProcess