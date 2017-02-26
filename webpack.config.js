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
    entry: "./index.jsx",
    output: {
        path: __dirname + "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude:/[node_modules|lib]/,
                loader: 'babel',
                      query: {
                        presets: ['react']
                      }
            }
        ]
    }
};