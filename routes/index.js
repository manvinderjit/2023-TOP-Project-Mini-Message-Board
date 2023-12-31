const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Manvinderjit",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Manvinder's Friend",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Manvinderjit's Mini Messageboard", messages: messages });
});

/* GET new message page. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: "Add New Message"});
});

/* POST new message page. */
router.post('/new', function(req, res, next) {
  messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
  res.redirect('/');
});

module.exports = router;
