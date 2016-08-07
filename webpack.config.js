var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var uglifyJsPlugin = require("webpack/lib/optimize/uglifyJsPlugin");

function getEntry(dir) {
    var fs = require('fs');
    var jsPath = path.resolve(dir, 'assets/js');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [], files = {};
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        if (matchs) {
            files[matchs[1]] = path.resolve(dir, 'assets/js', item);
        }
    });
    return files;
}
 
module.exports = {
    entry: getEntry(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: "js/[name].js",
    },
    // webpack-dev-server 配置目录
    devServer:{
        contentBase:'./'
    },
    module: {
        loaders: [
            {
                test: /\.css$/, loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=img/[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            nm: path.resolve(__dirname, "node_modules"),
            jquery: path.resolve(__dirname, "node_modules/jquery/dist/jquery.min.js"),
            components: path.resolve(__dirname, "components"),
            assets: path.resolve(__dirname, "assets")
        }
    },
    plugins: [
        //js文件的压缩
        new uglifyJsPlugin({
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']    //排除关键字
        })
    ]
};