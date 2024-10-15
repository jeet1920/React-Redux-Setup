// Login actions js
import { logInConstant } from '../constants';

export const logInAction = {
    logIn_request,
    logIn_success,
    logIn_failure
};

function logIn_request(user) {
    console.log('Action Data', user);
    return { type: logInConstant.LOGIN_REQUEST, payload: user };
}

function logIn_success(user) {
    return { type: logInConstant.LOGIN_SUCCESS, payload: user };
}

function logIn_failure(error) {
    return { type: logInConstant.LOGIN_FAILURE, payload: error }; 
}
