export const REQUEST_SIGNIN = "REQUEST_SIGNIN";
export const FAILURE_SIGNIN = "FAILURE_SIGNIN";
export const REQUEST_SIGNUP = "REQUEST_SIGNUP";

export const SIGNIN = "SIGNIN";
export const signin = (id, password, exists) => ({
	type: SIGNIN,
	data: {
		id: id,
		password: password,
		exists: exists
	}
});

export const SIGNOUT = "SIGNOUT";
export const signout = (user) => ({
	type: SIGNOUT,
	data: {
		user: user
	}
});

export const SIGNUP = "SIGNUP";
export const signup = (id, password) => ({
	
});