const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config');

new WebpackDevServer(webpack(config),{
	publicPath:config.output.publicPath,
	hot:true,
	noInfo:false,
	historyApiFallback:true
}).listen(8080,'localhost',function(err,result){
	if(err) console.log(err);
	console.log('Listening at localhost:8080');
	console.log('please open your browse');
})