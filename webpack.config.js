var webpack = require('webpack');
module.exports={
	entry:"./app/components/Main.js",
	output:{
		filename:"public/bundle.js"
	},
	devServer:{
		inline:true,
		port:8080

	},
	module:{
		loaders:[
		{
			test: /\.jsx?$/,
			exclude:/(node_modules|bower_components)/,
			loader:'babel',
			query:{
				presets:['react','es2015']
			}
		}
		]
	},
	plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: false,
    //   mangle: false
    // })
  ]
}