
const webpack = require("webpack")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main: './index.js'
    },
    mode: 'development',
    optimization: {
        minimize: false
    },
    devServer: {
        contentBase: "./dist",
        open: true,
        hot:true,
        
        //即便HMR不生效，浏览器也不自动刷新，就开启hotOnly
        hotOnly:true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [[
                            "@babel/plugin-transform-react-jsx",
                            {pragma: "SunsmileReact.createElement"} 
                        ]]
                    },
                    
                    
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

}