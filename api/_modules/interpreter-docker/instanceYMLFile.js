//This module injects local_volume & host_port values to  docker-compose.yml file

const fs = require('fs')
const yaml = require('js-yaml')

function _instanceYMLFile(local_volume,host_port) {

    try {        
        let fileContents = fs.readFileSync('./docker-compose.yml', 'utf8')
        let data = yaml.safeLoad(fileContents)
            data.services.mysql.volumes[0] = `~/docker/${local_volume}:/var/lib/mysql`  
            data.services.wordpress.ports[0] = `${host_port}`
        let yamlStr = yaml.safeDump(data)
        fs.writeFileSync('docker-compose.yml', yamlStr, 'utf8')
    } catch (e) {
        console.log(e)
    }
}

exports._instanceYMLFile = _instanceYMLFile;