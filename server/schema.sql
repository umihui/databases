DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE user (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) UNIQUE
);

-- CREATE TABLE room (
--   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   roomname VARCHAR(20)
-- );

CREATE TABLE message (

  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  message VARCHAR(200),
  user_id INTEGER ,
  roomname VARCHAR(20),
  FOREIGN KEY (user_id) REFERENCES user(id)
  -- FOREIGN KEY (room_id) REFERENCES room(id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

