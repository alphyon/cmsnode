'use strict'

module.exports = getEnv;

/**
 * Obtener la variable actual de entorno de NODE_ENV
 *
 **/

function getEnv() {
    return {
        name: process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
    }
}
