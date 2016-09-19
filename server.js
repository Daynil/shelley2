'use strict';

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const compress = require('compression');

const app = express();

let port = process.env.PORT || 3000;
let verboseLogging = false;

app.use(morgan('dev', {
  skip: (req, res) => {
    if (verboseLogging) return false;
    else return req.baseUrl === '/scripts';
  }
}));

app.use(compress());
app.use( express.static( path.join(__dirname, './dist') ));
app.use('/scripts', express.static( path.join(__dirname, './node_modules') ));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist', 'index.html'));
});

/**  Start Server  **/
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});