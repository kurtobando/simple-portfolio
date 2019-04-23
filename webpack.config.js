const path = require('path');

module.exports = {
	mode: "development", // "production" | "development" | "none"
	entry: './src/js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/js')
	}
};