const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressSession = require('express-session');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');

const port = 3002;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const UserModel = require('./models/User');

dotenv.config();

app.prepare().then(() => {
  const server = express();

  axios.defaults.baseURL = 'https://penpal-vafhi.run.goorm.io' // the prefix of the URL
  console.log('axios base: ' + axios.defaults.baseURL);
	
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
  		UserModel.findByIdAndPassword(req.body.identifier, req.body.password, (err, user, json) => {
			if(err != null) {
				console.log(err);
				res.status(500).send('Signin: internel server error')
			} else {
				res.json(json);							
			}
		});
  });
	
  server.post('/api/auth/signout', (req, res) => {
		UserModel.updateUser(req.body.identifier, (err, user, json) => {
			if(err != null) {
				console.log(err);
				res.status(500).send('Signout: internal server error');
			} else {
				res.json(json);
			}
		})
  });
	
  server.post('/api/auth/signup', (req, res) => {
	 const id = req.body.identifier;
	 const password = req.body.password;
	  
	 UserModel.createUser(id, password, (err, user, json) => {
	 	console.log(json);
		 res.json(json);
		 
	 });
  });
	
  server.get('/api/auth/user', (req, res) => {
	 UserModel.findById(req.query.identifier, (err, user, json) => {
		 if(err) {
			 console.log(err);
			 res.status(500).send('isJoined: internal server error');
		 } else {
	  		 res.json(json);
		 }
	 });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(port, () => {
    console.log('next+expresss running on port ${port}');
  })

})