const path = require('path');
const distDir = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: distDir,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    devServer: {
        contentBase: distDir
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'static/index.html'
        })
    ]
};
