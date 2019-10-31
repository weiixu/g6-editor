const path = require('path');

const rules = [{
  test: /\.js$/,
  exclude: [
    path.resolve(__dirname, 'node_modules'),
  ],
  use: {
    loader: 'babel-loader',
  },
}, {
  test: /\.less$/,
  use: [{
    loader: 'style-loader',
  }, {
    loader: 'css-loader',
    options: {
      modules: true,
      camelCase: true,
      importLoaders: 1,
      localIdentName: '[local]--[hash:base64:5]',
    },
  }, {
    loader: 'postcss-loader',
    options: {
      config: {
        path: path.resolve(__dirname, './postcss.config.js'),
      },
    },
  }, {
    loader: 'less-loader',
  }],
}, {
  test: /\.(png|jpe?g|gif)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: 'src/common/img/[name].[ext]',
    // name: 'src/common/[name].[hash:7].[ext]',
  },
}, {
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  use: [{
    loader: 'babel-loader',
  },
  {
    loader: '@svgr/webpack',
    options: {
      babel: false,
      icon: true,
    },
  }],
}];

const externals = {
  react: {
    root: 'React',
    commonjs: 'react',
    commonjs2: 'react',
    amd: 'react',
  },
};

module.exports = {
  module: {
    rules,
  },
  externals,
};
