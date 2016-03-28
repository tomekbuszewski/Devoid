module.exports = {
	entry: [
		'./_babel/index.js'
	],
	output: {
		path: __dirname + '/_js',
		filename: 'index.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	}
};
