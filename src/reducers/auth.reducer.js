import {userConstants} from "../constants";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {loggedIn: true, user} : {};

export function auth(state = initialState, {type, payload}) {
    switch (type) {
        case userConstants.LOGIN_REQUEST:
            return{
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return { ...state, ...payload }
           /* return {
                loggedIn: true,
                user: action.user
            };*/
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}