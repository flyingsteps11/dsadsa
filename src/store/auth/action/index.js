import {LOGIN_SUCCESS} from '../actionType';
import axios from 'axios';

const request = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: {
        'Content-type': 'application/json;charset=UTF-8'
    }
});

const loginSuccess = payload => ({
    type: LOGIN_SUCCESS,
    payload
});

const login = data => dispatch => {
    request.post('/identity/login', data)
        .then(({data: tokens}) => saveTokenToLS(tokens, dispatch))
        .catch(error => console.error(error));
};

const saveTokenToLS = (accessToken, dispatch) => {
    localStorage.setItem('token', accessToken);
    request.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    request.get('/identity/userInfo')
        .then(({data}) => dispatch(loginSuccess({ name: data.userName })))
        .catch(error => console.error(error));

};

export {
    login,
    loginSuccess
}