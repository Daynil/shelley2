'use strict';

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').load();

// Mailgun setup
const Mailgun = require('mailgun-js');
const mailgun_api = process.env.MAILGUN_API_KEY;
const domain = 'shelleypier.com';
const our_email = 'spiercounseling@gmail.com';

const app = express();

let port = process.env.PORT || 3000;
let verboseLogging = false;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev', {
  skip: (req, res) => {
    if (verboseLogging) return false;
    else return req.baseUrl === '/scripts';
  }
}));

app.use(compress());
app.use( express.static( path.join(__dirname, './dist') ));
app.use('/scripts', express.static( path.join(__dirname, './node_modules') ));

app.post('/email', (req, res) => {
  let mailData = req.body;

  let mailgun = new Mailgun({apiKey: mailgun_api, domain: domain});

  let mail = {
    from: mailData.email,
    to: our_email,
    subject: `Counseling website email - ${mailData.subject}`,
    html: `
      <div><b>Name:</b> ${mailData.first} ${mailData.last}</div>
      <div><b>Message:</b></div>
      <div>${mailData.body}</div>
    `
  };

  mailgun.messages().send(mail, (err, body) => {
    if (err) {
      console.log('mail error: ', err);
      res.status(500).json({message: 'error'});
    }
    else {
      console.log('sent!');
      res.status(200).json({message: 'sent'});
    }
  });

});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist', 'index.html'));
});

/**  Start Server  **/
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});