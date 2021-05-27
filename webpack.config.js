const { resolve } = require('path');
const webpack = require('webpack');

// 创建一个空的html，把打包生成的资源全部引入进去
const htmlWebpackPlugin = require('html-webpack-plugin');
// 抽离css
const MiniCssExteactPlguin = require('mini-css-extract-plugin');
// 压缩CSS
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
// manifest
// const WebpackManifestPlugin = require('webpack-manifest-plugin');

const { SERVER_ENV } = process.env;

console.log('SERVER_ENV', SERVER_ENV);

const config = {
  // 入口
  entry: {
    index: {
      import: './src/js/index.js',
      dependOn: 'lodash',
    },

    print: {
      import: './src/js/print.js',
      dependOn: 'moment',
    },
    other: {
      import: './src/js/other.js',
      dependOn: ['moment', 'lodash'],
    },
    // 共享模块
    moment: 'moment',
    lodash: 'lodash',
  },
  // 出口
  output: {
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, SERVER_ENV ? 'build' : 'dist'),
    clean: true, // 清理旧文件
    publicPath: '/',
  },
  // loader的配置
  module: {
    rules: [
      // 详细loader配置，use中数组的执行顺序是从右向左
      // css处理
      {
        // 匹配哪些文件
        test: /\.css$/,
        // css-loader将css文件转为commonJS模块加载到js中 style-loader姜js中的样式资源插入，添加到head中生效
        use: [MiniCssExteactPlguin.loader, 'css-loader'],
      },
      // less处理
      {
        test: /\.(sa|sc|le)ss$/,
        use: [
          {
            loader: MiniCssExteactPlguin.loader,
            options: { publicPath: '/' },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
          'sass-loader',
        ],
      },
      // 图片处理
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 限制 5k 以下的图片使用base64处理
              limit: 1 * 1024,
              name: '[hash:10].[ext]', // 图片名字规则
              outputPath: 'img',
            },
          },
        ],
      },
      // babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // 设置 babel 通过那些规定做兼容性处理
            presets: [
              [
                '@babel/preset-env',
                {
                  // useBuiltIns 共有三个值：
                  // false: 不对 polyfill 做操作
                  // entry: 根据配置的浏览器兼容版本，引入浏览器不兼容的 polyfill
                  // usage: 根据配置的浏览器兼容版本，以及代码中使用到的语法来 决定引入那些 polyfill
                  useBuiltIns: 'usage',
                  // 指定使用那个版本的 corejs 进行转换
                  corejs: {
                    version: 3.6,
                  },
                  // 配置浏览器需要兼容的版本 key 为浏览器名称， value 为浏览器的版本号
                  targets: {
                    // 截至到现在 chrome 现在已经更新到 86 版本了
                    chrome: '70',
                    ie: '9',
                  },
                },
              ],
            ],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.js$/,
        // 排查第三方库，第三方库无需检查格式
        exclude: /node_modules/,
        use: {
          // 使用 eslint-loader 进行检查
          loader: 'eslint-loader',
          options: {
            fix: true,
          },
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: { esModule: false },
      },
    ],
  },
  // 插件
  plugins: [
    new htmlWebpackPlugin({
      // 以指定模板生成打包的文件
      template: resolve(`${__dirname}/src`, 'index.html'),
    }),
    // 加载mini-css-extract-plugin插件
    new MiniCssExteactPlguin({
      filename: 'style/[name].[contenthash:10].css',
    }),
    // 压缩css
    new CssMinimizerWebpackPlugin(),
    new webpack.ProgressPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  // 模式
  mode: SERVER_ENV || 'development',
  target: 'web',
  // dev-server
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: false,
    open: true,
    // 开启HMR
    hot: true,
    port: 3000,
  },
  // 调试工具
  devtool: 'hidden-source-map',
};

module.exports = config;
