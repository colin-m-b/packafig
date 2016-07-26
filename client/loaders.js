const loaderList = {
  json: {
    loader: 'json-loader',
    npm: 'npm install --save json-loader',
    regEx: '/\.json$/',
  },
  css: {
    loader: 'css-loader',
    npm: 'npm install css-loader --save-dev',
    regEx: '/\.css$/',
  },
  sass: {
    loader: 'sass-loader',
    npm: 'npm install sass-loader',
    regEx: '/\.scss$/',
  },
  babel: {
    loader: 'babel-loader',
    npm: 'npm install babel-loader babel-core babel-preset-es2015 --save-dev',
    regEx: '/\.js$/',
  },
  eslint: {
    loader: 'eslint-loader',
    npm: 'npm install eslint-loader',
    regEx: '/\.js$/',
  },
  elm: {
    loader: 'elm-webpack-loader',
    npm: 'npm install --save elm-webpack-loader',
    regEx: '/\.elm$/',
  },
};

const loaderNames = Object.keys(loaders);
