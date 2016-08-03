global.Promise = require('bluebird'); // for node 0.10

var webpack = require('webpack');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/static/build/',
        filename: "main.js",
        publicPath: "/static/build/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.jsx$/, loader: "babel", exclude: [/node_modules/, /public/] },
            { test: /\.js$/, loader: "babel", exclude: [/node_modules/, /public/] }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};
