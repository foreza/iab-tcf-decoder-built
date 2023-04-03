const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'TCStringDecoder.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'iabDecoder'
    },
};