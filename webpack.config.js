/*
 *  FileName:
 *  Function:
 *  Author:刘翔
 *  Date:2017/2/26:22:19
 *  Mail:LXiang.tyut@gmail.com
 *  Company:中信银行太原分行
 *
 */

module.exports = {
    entry: "./index.js",
    output: {
        // path: __dirname + "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }

};