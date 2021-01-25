export const SIGNIN = "SIGNIN";
export const REQUEST_SIGNIN = "REQUEST_SIGNIN";
export const FAILURE_SIGNIN = "FAILURE_SIGNIN";
export const SIGNUP = "SIGNUP";
export const REQUEST_SIGNUP = "REQUEST_SIGNUP";

export const signin = (id, password) => {
    return {
        type: SIGNIN,
        data: { id, password }
    };
};
