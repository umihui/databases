var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res ) {
      models.messages.get(res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // console.log('here!!!!!!!!!!!!!!!!!!!!!!!!!!! users get');
      // models.messages.get();
      // res.writeHead(200);
      // res.end();
    },
    post: function (req, res) {
      // data collection
      models.users.post(req.body.username, res);
    }
  }
};

