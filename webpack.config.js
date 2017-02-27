/*
 *  FileName:
 *  Function:
 *  Author:刘翔
 *  Date:2017/2/26:22:19
 *  Mail:LXiang.tyut@gmail.com
 *  Company:中信银行太原分行
 *
 */
var path = require("path");
var webpack = require("webpack");
module.exports = {
    entry: "./app/index.jsx",
    output: {
        path: __dirname + "/build/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: [
                    path.resolve(__dirname,"node_module"),
                    path.resolve(__dirname,"lib"),
                ],
                loaders: ['react-hot-loader','babel-loader']
            }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]

};