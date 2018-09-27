const { resolve } = require('path');

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer-stylus');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let CompressionPlugin = require('compression-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

    entry: [
        resolve(__dirname, './src/index.js'),
        resolve(__dirname, './src/javascript/controller.js'),
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },


    resolve: {
        modules: ['src', 'node_modules'],
        alias: {
            Components: 'src/components',
            Assets: 'src/assets',
        },
    },

    context: resolve(__dirname, 'src/'),

    module: {
        rules: [
            {
                test: /(\.scss)$/,
                loaders: [
                    'style-loader',
                    'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]!sass-loader?sourceMap',
                ],
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: true } },
                        { loader: 'stylus-loader', options: { minimize: true } },
                    ],
                }),
            },
            {
                test: /(\.css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
            {
                test: /\.(png|jpg)$/,
                use: 'url-loader?limit=15000',
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                use: 'file-loader?publicPath=/&name=./assets/fonts/[hash].[ext]',
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use:
                    'url-loader?publicPath=/&name=./assets/fonts/[hash].[ext]&limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
                use:
                    'url-loader?publicPath=/&name=./assets/fonts/[hash].[ext]&limit=10000&mimetype=application/octet-stream',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=image/svg+xml',
            },
        ],
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            test: /\.js$/,
            options: {
                eslint: {
                    configFile: resolve(__dirname, '.eslintrc'),
                    cache: false,
                },
            },
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.styl$/,
            stylus: {
                default: {
                    use: [autoprefixer()],
                },
            },
        }),
        new CopyWebpackPlugin([
            {
                from: resolve(__dirname, 'src/assets'),
                to: resolve(__dirname, 'dist/assets'),
            },
        ]),
        new HtmlWebpackPlugin({
            hash: true,
            inject: 'body',
            minify: {
                collapseWhitespace: true,
            },
            filename: 'index.html',
            template: resolve(__dirname, 'src/index.template.ejs'),
            title: 'Horizon',
        }),

        new ExtractTextPlugin({
            filename: 'style.css',
            disable: false,
            allChunks: true,
        }),
    ],
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        port: 4000,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        proxy: {
            '/api': {
                // target: 'https://internal-multiassettool-server-alb-65394220.us-east-1.elb.amazonaws.com/',
                target: 'http://10.123.1.24:5000/v1/previews',
                secure: false,
                changeOrigin: true,
                pathRewrite: { '^/api': '' },

            },
        },
    },
};

module.exports = config;


// var path = require('path'),
//     HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: {
//         controller: path.resolve(__dirname, './src/javascript/controller.js'),
//         app: path.resolve(__dirname, './src/javascript/app.js'),
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: '[name].bundle.js',
//     },
//     module: {
//         loaders: [
//             { test: /\.css$/, loader: 'style!css' },
//         ],
//     },
//     headers: {

//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             filename: 'controller.html',
//             template: './src/html/controller.html',
//             inject: false,
//         }),
//         new HtmlWebpackPlugin({
//             filename: 'app.html',
//             template: './src/html/app.html',
//             inject: false,
//         }),
//     ],
//     devServer: {
//         contentBase: path.resolve(__dirname, 'dist'),
//         port: 4000,
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//         },
//     },
// };
