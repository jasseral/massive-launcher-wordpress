const express = require('express')
const compose = require('docker-compose')
const app = express()
var path = require('path');

var instance = require('./_modules/instanceYMLFile')

instance._instanceYMLFile('xd2','xd2')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

config = { 
    cwd: path.join(__dirname), 
    log: true 
}



app.get('/up', function (req, res) {
        
    compose.upAll(config).then((out) => { 
        //res.send(out)
        var response = {
            message: 'Your wordpress site was created on' ,
            service_url: 'http://localhost:8080'  
        }
        res.send(response)
        
    },err =>  { 
        console.log('something went wrong:', err.message)
        res.send(err.message)
    }
    )
})

app.get('/down', function (req, res) {
    
    compose.down(config).then(() => { 
        //res.send(out)
        var response = {
            message: 'Your wordpress site was destroyed on' ,
            service_url: 'http://localhost:8080'  
        }
        res.send(response)
        
    },err =>  { 
        console.log('something went wrong:', err.message)
        res.send(err.message)
    }
    )
})

app.listen(3001,() => {
    console.log('Api Server running')
})