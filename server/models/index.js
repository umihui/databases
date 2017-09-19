var db = require('../db');

module.exports = {
  messages: {
    get: function (res) {

      db.connection.query('SELECT message.id, message.message, message.roomname, user.name FROM message, user WHERE message.user_id=user.id', function (err, rows, fields) {
        if(err) {
          throw err;
        }
        var message = {
          objectId: rows[0].id,
          roomname: rows[0].roomname,
          username: rows[0].name,
          message: rows[0].message,
        }

        res.status(200).json({results: [message]});
        res.end();
      })
      // db.connection.end();
    }, // a function which produces all the messages
    post: function (messages, res) {
      console.log('MESSAGE POST MODEL',messages);

      db.connection.query('INSERT INTO message (message, user_id, roomname) SELECT ?, id, ? FROM user WHERE name=?', [messages.message, messages.roomname, messages.username], function (err, rows, fields) {
        if(err) {
          console.log('MESSEGE insert  error');
          throw err;
        }
        console.log('MESSEGE inserted');
        res.send();
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, res) {
      console.log('models user post: ', username);
      var data = {
        name: username,
      }

      db.connection.query('INSERT IGNORE INTO user SET ?', [data], function (err, rows, fields) {
        if(err) {
          console.log('insert user error');
          throw err;
        }
        console.log('user inserted');
        res.send('OK');
      });

    }
  }
};

