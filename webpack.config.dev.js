const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 9999,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
});