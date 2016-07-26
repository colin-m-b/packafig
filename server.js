const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(express.static(path.join(__dirname, './client/')));
app.use(bodyParser.json());
app.post('/', (req, res) => {
  fs.writeFile(__dirname + '/client/data.js',
  JSON.stringify('module.exports = ' + JSON.stringify(req.body)));

// filePath = __dirname + './client/data.txt'
// req.on('data', function(data) {
//     body += data;
// });
// req.on('end', function() {
//     console.log(body)
//     fs.appendFile(filePath, body, function() {
//         res.end()
//     })
// })
});

app.listen(3000);
