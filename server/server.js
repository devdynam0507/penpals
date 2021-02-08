const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressSession = require('express-session');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = 3002;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

dotenv.config();

const User = require('./models/User');

app.prepare().then(() => {
  const server = express();

  mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
  }).then(() => console.log('Connected MongoDB'))
  .catch(error => console.log(error)); 

  server.use(cors());
  server.use(morgan('dev'));
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(
    expressSession({
      resave: false,
      saveUninitialized: false,
      secret: 'prrr2222',
      cookie: {
        httpOnly: true,
        secure: false,
      },
    }),
  );
	
  server.post('/api/auth/signin', (req, res) => {
    User.findOne({identifier: req.body.identifier, password: req.body.password }, function(err, user) {
      if(err) {
        res.send(err);
      } else {
        if(user != null) {
          res.json({
            identifier: user.identifier,
            password: user.password,
            exists: true
         });
        } else {
          res.json({ exists: false });
        }
      }
    })
  });
	
  server.post('/api/auth/signout', (req, res) => {
	 User.findOne({ indentifier: req.body.user.id }, function(err, user) {
		 if(err) {
			 res.json({
				 error: 500
			 });
		 } else {
			 user.published_date = Date.now;
			 user.save(function(err, product) {
				console.log('updated user data ' + user.published_date); 
			 });
		 }
	 }) 
  });
	
  server.get('/api/auth/user', (req, res) => {
	  User.findOne({ identifier: req.query.identifier }, function(err, user) {
	  	 if(err) {
			 res.json({
				 error: 500
			 });
		 } else if(user != null) {
			 res.json({
				 identifier: user.identifier,
				 exists: true
			 });
		 } else {
			 res.json({ exists: false });
		 }
	  })
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(port, () => {
    console.log('next+expresss running on port ${port}');
  })

})