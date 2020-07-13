fs = require('fs');


function _instanceHostFile (ip_resource) {

var str = `[masters]\nmaster ansible_host=${ip_resource} ansible_user=ubuntu \n\n[all:vars]\nansible_python_interpreter=/usr/bin/python3`

fs.writeFile('hosts',str, function (err) {
    if (err) return console.log(err);
  });

}

exports._instanceHostFile = _instanceHostFile