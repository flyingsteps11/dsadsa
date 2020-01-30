import {alertActions} from "./";
import {userConstants} from "../constants";
import {history} from "../utils";

export const userActions ={
    login,
    logout,
    getAll,
};

function login(username, password) {
    return dispatch =>{
        dispatch(request({username}));

    }
}