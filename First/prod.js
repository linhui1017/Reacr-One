const { resolve } = require('path');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const fs = require('fs-extra')
const HtmlWebpackPlugin = require('html-webpack-plugin')


console.log('打包pro');

fs.removeSync('dist/src')
fs.mkdir('dist/src', () => { })

module.exports = {
    
    entry: {
        bundle:'./default.js',
        vendors:[
        'babel-polyfill',
        'react',
        'react-dom',

    ]
    },
    output: {
        path: resolve( __dirname, 'dist/' ),
        filename: '[name].js',
        chunkFilename: "[name].chunk.js"
    },
    context: resolve(__dirname, 'public'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {      
                test: /^((?!\.global).)*\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                     "postcss-loader"
                ]
            },
            {
                test: /\.scss$/, //-- 可以直接用scss... 但不知道跟 css 另外打包的 plugin 會不會衝到，要再研究，先不用
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                     "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.global\.css$/,  // anything with .global will not go through css modules loader
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                     "postcss-loader"
                ]
            },
            {
                test: /\.(png|gif|jpg|svg|eot)?$/,
                
                use:[
                    {
                      loader: 'url-loader',
                      options: {
                        limit:256,
                        name: '[name].[ext]',
                        publicPath: './src/img/',
                        outputPath:'src/img/',
                        useRelativePath: false
                      }
                     
                    }
                ]
                // use: 'file-loader?name=source/[name]-[hash].[ext]',
            },
            {
                test: /\.(woff(2)?|ttf)?$/,
                
                use:[
                    {
                      loader: 'url-loader',
                      options: {
                        limit:256,
                        name: '[name].[ext]',
                        publicPath: './src/font/',
                        outputPath:'src/font/',
                        useRelativePath: false
                      }
                     
                    }
                ]
                // use: 'file-loader?name=source/[name]-[hash].[ext]',
            }
        ]
     },
    optimization: {
        splitChunks: {
            chunks: "async",
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
            chunkFilename: "chunks.css"
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessor:require('cssnano')({
                reduceIdents: false
            }),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title:'Production 1.18.1.1',
            template:'./MainTemplate.html',
            filename: './index.html'
          })
    ]
}

