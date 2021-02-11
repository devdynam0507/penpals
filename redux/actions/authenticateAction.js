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