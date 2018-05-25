var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
               test: /\.jsx?$/,
               loader: 'babel-loader',
               exclude: '/node_modules/',
               query: {
                   plugins: ['transform-decorators-legacy']
               }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        historyApiFallback: true,
        port: 3030,
        open: true,
        proxy: {
            "/api": "http://localhost:8080/"
        }
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: false
        })
    ],
    mode: 'development'
};