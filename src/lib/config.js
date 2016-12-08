'use strict';

var fs = require('fs');
var yaml = require('js-yaml');
var env = require('./env');
var config = yaml.safeLoad(fs.readFileSync(__dirname + '/../config/config.yml','utf-8'));

module.exports = getConfig;

/*Retorna la configuracion seleccionada*/

function getConfig(){
    return config[env().name] || {}
}
