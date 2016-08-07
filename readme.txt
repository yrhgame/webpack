// 用 babel-loader 转换 ES2015

1.先安装 babel 和 预设。
npm intall  --save-dev babel-core babel-preset-es2015

2.安装 babel-loader
npm install --save-dev babel-loader

3.修改 webpack.config.js 用babel-loader 处理所以 .js文件。
module.exports = {
	entry: './src/app.js',
	output: {
		path: './bin',
		filename: 'app.bundle.js',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/, // 我们排除 node_modules中的文件，因为要不然的话所有外部库都会通过babel编译，将会降低 编译速度。
			loader: 'babel-loader',
		}]
	}
}

4.安装你想用的第三方库。（例如 jQuery）
// 这里用 –save 而不是 –save-dev，　是因为这些库在执行时会用到。我们也安装了babel-polyfill 这样在一些老式浏览中可以用 ES2015了。
npm install --save jquery babel-polyfill

5.编辑 src/app.js
import 'babel-polyfill';
import cats from './cats';
import $ from 'jquery';

$('<h1>Cats</h1>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for (const cat of cats) {
	$('<li></li>').text(cat).appendTo(ul);
}

6.用webpack 打包
webpack

7. 添加 index.html，这样app能跑起来。
<!DOCTYPE html><body>
<script src="bin/app.bundle.js"></script>

8. 安装webpack-dev-server
npm install webpack-dev-server --save-dev

然后修改配置package.json，添加
"scripts": {
	"start": "webpack-dev-server"
},

然后命令行执行  npm start  就可以访问 http://localhost:8080 | http://localhost:8080/webpack-dev-server/
