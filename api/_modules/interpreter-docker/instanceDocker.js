var path = require('path');
//Docker compose library
const compose = require('docker-compose')
//Read docker-composer instanceYMLFile
var instance = require('./instanceYMLFile')
//Write docker-composer with new paramas
instance._instanceYMLFile('mysql-data','8080:80')

config = { 
    cwd: path.join(__dirname), 
    log: false
}

function upDockerComposer() {
  let promiseUpDockerComposer = new Promise((resolve,reject)=>{     
    compose.upAll(config).then((out) => { 
      resolve(new Object({errorFlag:false,stdAppend:out}))
    },err =>  { 
      resolve(new Object({errorFlag:true,stdAppend:err.message}))
        //console.log('something went wrong:', err.message)
    }) 
  })
  return promiseUpDockerComposer
}

function downDockerComposer() {
  let promiseDownDockerComposer = new Promise((resolve,reject)=>{     
    compose.down(config).then((out) => { 
      resolve(new Object({errorFlag:false,stdAppend:out}))
    },err =>  { 
      resolve(new Object({errorFlag:true,stdAppend:err.message}))
        //console.log('something went wrong:', err.message)
    }) 
  })
  return promiseDownDockerComposer
}


exports.upDockerComposer = upDockerComposer
exports.downDockerComposer = downDockerComposer
