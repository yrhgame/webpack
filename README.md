webpack + es6 + Webpack-dev-server 环境搭建实例

#目录结构说明：

|-assets       // 资源文件
  |-css        // 样式文件
  |-img        // 图片文件
  |-js         // 入口文件，该目录下的文件会全部编译后，分文件存放入 /dist/js/ 中
|-components   // 组件目录，模块文件存放目录，/assets/js/中的入口文件使用
|-dist         // 编译后的文件存放路径
|-node_modules // 依赖模块安装目录
index.html     // 测试文件


#本实例搭建步骤：
1、安装依赖组件
npm install

2、编译文件
webpack

3、打开webpack-dev-server服务
npm start

4、访问测试地址
http://localhost:8080/

5、查看编译效果
直接修改 css|js 文件，测试地址将直接无刷新加载
