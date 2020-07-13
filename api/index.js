const express = require('express')
const app = express()
var path = require('path');

var instanceTerraForm = require('./_modules/interpreter-terraform/instanceTerraForm')
var instanceDocker = require('./_modules/interpreter-docker/instanceDocker')
var instanceAnsible = require('./_modules/interpreter-ansible/instanceAnsible')

// -------------- MIDDLEWARES ----------------
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })


app.get('/terraform/demo', function (req, res) {
  setTimeout(function(){ 
    res.send(new Object({errorFlag:false,stdAppend:'information'}))
  }, 2000);
})

app.get('/terraform/create', function (req, res) {

  instanceTerraForm._spawnTerraformProcess('apply').then( data => {
      res.send(data)
    })
})

app.get('/terraform/destroy', function (req, res) {
    
  instanceTerraForm._spawnTerraformProcess('destroy').then( data => {
    res.send(data)
  })
   
})

app.post('/ansible/up', function (req, res) {

  var ip_resource = req.body.get_ip
  instanceAnsible._spawnAnsibleProcess('mysql-data',80,ip_resource).then( data =>{
    res.send(data)
  })
  
})


app.get('/docker/up', function (req, res) {

  instanceDocker.upDockerComposer().then( data =>{
    res.send(data)
  })
  
})

app.get('/docker/down', function (req, res) {
    
  instanceDocker.downDockerComposer().then( data =>{
    res.send(data)
  })
   
})

app.listen(3001,() => {
    console.log('Api Server running')
})