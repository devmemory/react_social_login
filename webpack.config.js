// 1. 엔트리 포인트 설정
// 2. rules에 로더 설정 및 순서 배치(뒤의 요소부터 번들링에 반영)
// 3. build 위치 및 개발 서버 셋팅
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin

// dev/production 분리용
require('dotenv').config()

module.exports = {
    mode: process.env.mode,
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            src: "src",
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            hash: true,
            favicon: 'public/favicon.ico'
        }),
        new webpack.DefinePlugin({
            port: process.env.port,
            'process.env': JSON.stringify(process.env)
        })
    ],
    devServer: {
        host: 'localhost',
        port: process.env.port || 5555,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}