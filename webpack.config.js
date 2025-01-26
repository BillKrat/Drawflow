module.exports = {
  entry: './src/drawflow.js',
  output: {
    library: 'Drawflow',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'drawflow.min.js',
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  }
};

/*
   https://webpack.js.org/guides/getting-started/

   Install webpack using the above link then invoke the following:
   
   npx webpack --config webpack.config.js
   
*/