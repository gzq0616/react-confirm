/**
 * Created by guziqiang on 2016/8/19.
 */
'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        publicPath: '/dist/',
        path: path.join(__dirname, './dist'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {test: /\.js(x)?$/,loaders: ['react-hot','babel'],include:[path.join(__dirname,'src')]},
            {test: /\.css$/,loader: 'style-loader!css-loader'},
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin()
    ]
};