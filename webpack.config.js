var webpack = require('webpack');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
	'webpack-hot-middleware/client',
	'./client/client.js'
	],
	output: {
		path: require('path').resolve('./dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/, //tests for .js 
				loader: 'babel-loader', // compiler for jsx and es6
				exclude: /node_modules/,
				query: {
					presets: ['react','es2015', 'react-hmre']
				}
			}
		]
	}
} 