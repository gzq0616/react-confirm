/**
 * Created by guziqiang on 2016/8/19.
 */
'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/components/Confirm.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'confirm.js'
    },
    module: {
        loaders: [
            {test: /\.js(x)?$/,loader: 'babel',include:[path.join(__dirname,'src/components/')]},
            {test: /\.css$/,loader: 'style-loader!css-loader'},
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};