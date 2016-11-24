const path = require('path');
const packageJSON = require('../package.json');

const NODE_ENV = process.env.NODE_ENV || 'development';

const base = {
    paths: {
        root: path.resolve(__dirname, '../'),
        source: path.resolve(__dirname, '../app'),
        output: path.resolve(__dirname, '../build'),
        assets: path.resolve(__dirname, '../app/assets'),
        reports: path.resolve(__dirname, '../reports'),
        nodeModules: path.resolve(__dirname, '../node_modules'),
        babel: path.resolve(__dirname, '../config/babel/.babelrc'),
        img: './img',
        fonts: './fonts'
    },
    postcss: path.resolve(__dirname, '../config/postcss/postcss.config.js'),
    isDevelop: NODE_ENV === 'development',
    isProd: NODE_ENV === 'production',
    port: process.env.PORT || 8080,
    pkg: packageJSON
};

module.exports = base;