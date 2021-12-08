'use strict';

const path = require("path");

let config = {
    viewDir: path.join(__dirname, '..', 'views'),
    staticDir: path.join(__dirname, '..', 'assets'),
};

{
    const prodConfig = {
        port: 80,
        cache: "memory"
    };
    config = {...config, ...prodConfig};
}

var config$1 = config;

module.exports = config$1;
