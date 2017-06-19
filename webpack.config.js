var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env){
	return {
		devtool: 'eval-source-map',
		devServer: {
	        contentBase: path.join(__dirname, 'application/dev'),
	        hot: true,
	        inline: true,
	        historyApiFallback: true,
	        headers: { 'Access-Control-Allow-Origin': '*' },
	        host: 'localhost',
	        port: 8080
	    },
		entry: {
			index: path.join(__dirname, 'application/index.jsx')
		},
		output: {
			filename: '[name].[hash:5].js',
			path: path.join(__dirname, 'application/build')
		},
		module:{
			rules: [
				{test: /\.css$/, use: 'css-loader'},
				{test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/},
				// {test: /\.(js|jsx)$/, use: 'eslint-loader', enforce: 'pre'}
			]
		},
		resolve: {
			modules: [path.join(__dirname, "/application"), 'node_modules'],
			extensions: ['.js', '.jsx']
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
	        new webpack.optimize.CommonsChunkPlugin({	
	            names: ['main', 'manifest'] // Specify the common bundle's name.
	        }),
	      	// new webpack.optimize.UglifyJsPlugin({
	       //   	compress: env.production // compress only in production build
	      	// })
	      	new HtmlWebpackPlugin({
	            title: "test",
	            template: path.join(__dirname, 'application/index.html')
	        }),
	        new webpack.DefinePlugin({
	            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
	        })
	    ]
	}
}