const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    identifier: String,
    password: String,
    published_date: { type: Date, default: Date.now }
});

const User = mongoose.model('user', UserSchema);

const makeResultJson = (user) => {
	return {
		identifier: user.identifier,
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

module.exports = {
	model: User,
	findByIdAndPassword: findByIdAndPassword,
	findByQuery: findByQuery,
	findById: findById,
	updateUser: updateUser,
	createUser: createUser,
	makeResultJson: makeResultJson
}