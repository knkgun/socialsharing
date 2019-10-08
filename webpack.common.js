const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	entry: {
		'socialsharing_diaspora':	path.join(__dirname, 'socialsharing_diaspora/src', 'main.js'),
		'socialsharing_email':		path.join(__dirname, 'socialsharing_email/src', 'main.js'),
		'socialsharing_facebook':	path.join(__dirname, 'socialsharing_facebook/src', 'main.js'),
		'socialsharing_twitter':	path.join(__dirname, 'socialsharing_twitter/src', 'main.js')
	},
	output: {
		path: path.resolve(__dirname),
		publicPath: '/js/',
		filename: '[name]/js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|vue)$/,
				use: 'eslint-loader',
				exclude: /node_modules/,
				enforce: 'pre'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	],
	resolve: {
		extensions: ['*', '.js', '.vue'],
		symlinks: false
	}
}
