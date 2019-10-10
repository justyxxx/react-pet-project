const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: ['@babel/polyfill', './src/index.js']
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'prettier-loader']
            },
            {
                test: /\.less?$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'less-loader'}]
            },
            {
                test: /\.(js|jsx|mjs)$/,
                loader: 'prettier-loader',
                exclude: /node_modules/,
                options: require('./prettier.config')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)?$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        alias: {
            '../../theme.config$': path.join(__dirname, '/src/styles/theme.config'),
            '../semantic-ui/site': path.join(__dirname, '/src/styles/site'),
            'react-dom': '@hot-loader/react-dom'
        }
    },
    output: {
        path: path.resolve(__dirname, './target'),
        filename: 'app.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebPackPlugin({template: './public/index.html'}),
        new webpack.ProvidePlugin({
            R: 'ramda'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, './target'),
        port: 5000,
        historyApiFallback: true
    }
}
