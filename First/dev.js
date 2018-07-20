const { resolve } = require('path');
const webpack = require('webpack');
const fs = require('fs-extra');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

devPack = env => {

    console.log('打包dev');

    // fs.removeSync('dev/public')
    // fs.mkdir('dev/public', () => { })
    //fs.mkdir('dev/public/src', () => { })

    fs.removeSync('dev/src')
    fs.mkdir('dev/src', () => { })


    const port = env.port

    return {
        entry: {
            bundle:'./default.js',
            vendors:[
            'babel-polyfill',
            'react',
            'react-dom',
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://0.0.0.0:${port}`,
            'webpack/hot/only-dev-server'
        ]},
        // output: {
        //     filename: 'bundle.js',
        //     path: resolve(__dirname, 'dev/public'),
        // },
        output: {
            // path: resolve( __dirname, 'dev/public' ),
            path: resolve( __dirname, 'dev/' ),
            filename: '[name].js'
        },       
        context: resolve(__dirname, 'public'),
        devServer: {
            port: port,
            host: '0.0.0.0',
            contentBase: resolve(__dirname, 'dev'),
            publicPath: '',
            hot: true,
            disableHostCheck: true
        },
        devtool: 'eval-source-map',
        module: {
            rules: [
                // {
                //     enforce: "pre",
                //     test: /\.js$/,
                //     exclude: /node_modules/,
                //     loader: "eslint-loader",
                // },  
                {
                    test: /\.(js|jsx)$/,

                    use: [
                        "babel-loader"
                    ],
                    
                    exclude: /(node_modules|bower_components)/,
 
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader"
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader",
                        "sass-loader"
                    ]
                },
                // {
                //     test: /\.(png|gif|jpg|svg|eot|woff(2)?|ttf)?$/,
                //     use: 'url-loader?name=source/[name]-[hash].[ext]',
                // },
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
            ],
        },
        plugins: [
            // new webpack.HotModuleReplacementPlugin(), //-- react 的 hotreload plugin
            new webpack.NamedModulesPlugin(),
            new MiniCssExtractPlugin({
                filename: "styles.css",
                // chunkFilename: "[id].css"
                chunkFilename: "chunks.css"
                
            }),
            new HtmlWebpackPlugin({
                title:'Develope 1.18.1.1',
                template:'./MainTemplate.html',
                filename: './index.html'
              })
        ]
    }
}

module.exports= devPack
