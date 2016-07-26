// const path = require('path');
// const webpack = require('webpack');







// $('#download').clic
const entry = $('#entry').text();
const output = {};
output.path = $('#fileName').text();
output.filename = $('#fileOutput').text();
const loaders = [];

// module.exports = {
//     entry: entry,
//     output: {
//         path: output.path,
//         filename: output.filename,
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.css$/,
//                 loader: 'style!css',
//             },
//         ],
//     },
// };