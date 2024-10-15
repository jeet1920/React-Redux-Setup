
// Login reducer.js
import { logInConstant } from "../constants";

const initialState = {
    user: null,
    loading: false,
    errors: null,
};

export function login(state = initialState, action) {
    console.log("Reducer state", state);
    console.log("Reducer action", action);

    switch (action.type) {
        case logInConstant.LOGIN_REQUEST:
            return { ...state, user:action.payload,loading: true, errors: null };
        case logInConstant.LOGIN_FAILURE:
            return { ...state, loading: false, errors: action.errors }; 
        case logInConstant.LOGIN_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        default:
            return state;
    }
}
