const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const isDev = process.env.NODE_ENV === 'development';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
    target: 'web',
    //入口方法
    entry: path.join(__dirname, 'src/index.js'),
    //出口方法
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, 'dist'),
        publicPath:"./dist/"
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.(gif|jpg|jpeg|png|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
    ]
}

if (isDev) {
    config.module.rules.push({
        test: /\.styl(us)?$/,
        use: [
            'vue-style-loader',
            'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }
            },
            'stylus-loader'
        ]
    })
    config.devtool = '#cheap-moudel-eval-source-map'
    config.devServer = {
            /* 端口 */
            port: 8000,
            /* IP */
            host: '0.0.0.0',
            overlay: {
                /* 输出异常信息 */
                error: true
            },
            /* 自动打开浏览器 */
            open: true,
            //热更新
            hot: true
        },
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        )
} else {
    config.output.filename = '[name].[chunkhash:8].js'
    config.module.rules.push({
        test: /\.styl(us)?$/,
        // use: [
        //     'vue-style-loader',
        //     'css-loader',
        //     {
        //         loader: 'postcss-loader',
        //         options: {
        //             sourceMap: true
        //         }
        //     },
        //     'stylus-loader'
        // ]
        use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    // you can specify a publicPath here
                    // by default it uses publicPath in webpackOptions.output
                    publicPath: './',
                    hmr: process.env.NODE_ENV === 'development',
                },
            },
            'css-loader',
            {
                loader: 'postcss-loader',
                options: { sourceMap: true }
            },
            'stylus-loader'
        ]
    })
    config.plugins.push(
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: 'styles.[chunkhash].[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        })
    );
}

module.exports = config;