const mongoose = require('mongoose');
const User = require('../models/User');

const makeResultJson = (user) => {
	const identifier = user == null ? null : user.identifier;
	
	return {
		identifier: identifier,
		exists: user != null
	}
}

const findByIdAndPassword = async (identifier, password, callback) => {
	const query = {
		identifier: identifier,
		password: password
	};
	
	User.findOne(query, (err, user) => callback(err, user, {
		...makeResultJson(user),
		password: undefined,
	}));
}

const findById = async (identifier, callback) => {
	const query = {
		identifier: identifier
	};
	
	findByQuery(query, (err, user) => {
		callback(err, user, {
			exists: user != null
		});
	})
}

const findByQuery = (query, callback) => {
	User.findOne(query, (err, user) => callback(err, user));
}

const updateUser = async (identifier, callback) => {
	const query = {
		identifier: identifier
	};
	
	findByQuery(query, (err, user) => {
		if(user != null) {
			user.published_date = Date.now;
			user.save();
		}
		
		callback(err, user, {
			...makeResultJson(user),
			success: user != null
		});
	})
}

// password param은 무조건 sha256 encrypt가 되어있어야 합니다.
const createUser = async (identifier, password, callback) => {
	const query = {
		identifier: identifier,
		password: password
	};
	
	User.create(query, (err, user) => {
		callback(err, user, {
			...makeResultJson(user),
			success: err == null
		})
	})
}

const randomUsers = async (amount, callback) => {
	getUsers((users) => {
		if(users != null && users.length > 0) {
			amount = users.length < amount ? users.length : amount;
			const intMap = new Map();
			let pickedUsers = [];
			let count = 0;
			
			while(count < amount) {
				let n = Math.floor(Math.random() * amount - 1);
				
				if(!intMap.has(n)) {
					pickedUsers.push(users[n]);
					intMap.set(n, true);
					++count;
				}
			}
			
			callback(pickedUsers);
		}
	})
}

const getUsers = async (callback) => {
	User.find().then(users => {
		callback(users);
	});
	
}

module.exports = {
	findByIdAndPassword: findByIdAndPassword,
	findByQuery: findByQuery,
	findById: findById,
	updateUser: updateUser,
	createUser: createUser,
	getUsers: getUsers,
	randomUsers: randomUsers,
	makeResultJson: makeResultJson
}