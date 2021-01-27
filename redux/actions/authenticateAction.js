export const REQUEST_SIGNIN = "REQUEST_SIGNIN";
export const FAILURE_SIGNIN = "FAILURE_SIGNIN";
export const SIGNUP = "SIGNUP";
export const REQUEST_SIGNUP = "REQUEST_SIGNUP";

export const SIGNIN = "SIGNIN";
export default function signin(id, password, exists) {
    return {
        type: SIGNIN,
        data: {
            id: id,
            password: password,
            exists: exists
        }
    }
};

export const SIGNOUT = "SIGNOUT";
