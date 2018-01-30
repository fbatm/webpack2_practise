var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackNotifierPlugin = require("webpack-notifier");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

var env = process.env.NODE_ENV;
var config = {
	outputPath: path.join(__dirname, 'build')
}

var _exports = {
	entry: {
		index: path.join(__dirname, 'application/index.jsx')
	},
	output: {
		filename: '[name].[hash:5].js',
		chunkFilename: '[name].js',
		path: config.outputPath + '/src'
	},
	module:{
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
			},
			// {test: /bundle.jsx$/, use: {loader: 'bundle-loader', options: {lazy: true}}},
			{test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/}
			// {test: /\.(js|jsx)$/, use: ['bundle-loader?lazy=true', 'babel-loader'], exclude: /node_modules/}
			// {test: /\.(js|jsx)$/, use: 'eslint-loader', enforce: 'pre'}
		]
	},
	resolve: {
		modules: [path.join(__dirname, "/application"), 'node_modules'],
		extensions: ['.js', '.jsx', '.css']
	}
}

var plugins = [
	new WebpackNotifierPlugin(),
	new ExtractTextPlugin('stylesheets/[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
        names: ['main', 'manifest'] // Specify the common bundle's name.
    }),
  	new HtmlWebpackPlugin({
        title: "test",
        template: path.join(__dirname, 'application/index.html')
    }),
  	new HtmlWebpackPlugin({
        title: "sample",
        filename: 'sample.html',
        chunks: ['manifest'],
        template: path.join(__dirname, 'application/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
];

if(process.env.NODE_ENV == 'development'){
	plugins.push(new webpack.HotModuleReplacementPlugin());
	Object.assign(_exports, {
		devtool: 'eval-source-map',
		devServer: {
	        contentBase: path.join(__dirname, 'application/dev'),
	        hot: true,
	        inline: true,
	        historyApiFallback: true,
	        headers: { 'Access-Control-Allow-Origin': '*' },
	        host: 'localhost',
	        port: 8888,
	        proxy: {
	            "/api/*": {
	                target: {
	                    host: '',
	                    port: '8881'
	                },
	                secure: false
	            }
	        }
	    }
	})
}else{
	plugins.unshift(new CleanWebpackPlugin(config.outputPath, {
        exclude: ['node_modules', 'package.json', 'server.js']
    }), new CopyWebpackPlugin([{
        from: path.join(__dirname, '/apiHandler.js'),
        to: config.outputPath
    }]), new ParallelUglifyPlugin({
        cacheDir: '.cache/',
        uglifyJS: {
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }
    }))
}

_exports.plugins = plugins;

module.exports = _exports;