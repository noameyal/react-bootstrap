const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const metadata = require('./meta.json')

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './src/',
    output: {
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' }
                ]
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]-[local]-[hash:base64:5]'
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-react'],
                  }
                }   
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: metadata.title,
            template: 'public/index.html',
            hash: true
        }),
        new CopyWebpackPlugin([
            {
                from: 'public',
                to: ''
            }
        ])
    ]
}