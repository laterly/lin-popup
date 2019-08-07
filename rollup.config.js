const path = require("path");
const babel = require('rollup-plugin-babel');          //ES6转ES5插件;
const sass= require('rollup-plugin-sass');            //sass插件;
const commonjs= require("rollup-plugin-commonjs");    //将CommonJS模块转换成ES6，防止他们在Rollup中失效;
const uglify= require('rollup-plugin-uglify');        //js压缩;
const serve= require('rollup-plugin-serve');          //serve服务;
const livereload= require('rollup-plugin-livereload');//热更新;
const replace = require('rollup-plugin-replace')
const isDev = process.env.NODE_ENV !== 'production';
let sd = require('silly-datetime');
let time=sd.format(new Date(), 'YYYY-MM-DD HH:mm');
console.log(isDev);
let banner = 
  '/*!\n' +
  ' * js-lin v' + 1.0 + '\n' +
  ' * (c) '+ time + ' laterly\n' +
  ' */'
export default {
  input: path.resolve(__dirname, "./src/main.js"),
  output: [
    {
      file: path.resolve(__dirname, "./dist/bundle.js"),
      format: "es",
      banner: banner,
    }
  ],
  moduleName: 'popup',
  sourceMap: 'inline',       // 调试sourceMap;
  plugins: [
    commonjs(),           //将CommonJS模块转换成ES6;
    sass({
        output: './dist/bundle.css'  //设置sass编译完成路径;
    }),
    babel({
          babelrc: false,                        //不设置.babelrc文件;
          exclude: 'node_modules/**',            //排除node_modules文件夹;
          presets: ['@babel/preset-env'], //转ES5的插件;
          plugins: ['transform-class-properties']//转换静态类属性以及属性声明的属性初始化语法
    }),
    replace({ ENV: JSON.stringify(process.env.NODE_ENV || 'development')}),
    (!isDev && uglify()),                        //js压缩;
    serve({
     contentBase: './dist/',   //启动文件夹;
      host: 'localhost',      //设置服务器;
      port: 10001             //端口号;
    }), 
    livereload({
      watch: './dist/'     //监听文件夹;
    })
  ]
};
