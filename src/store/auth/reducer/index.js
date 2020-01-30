import {LOGIN_SUCCESS, LOGIN_FAILURE} from '../actionType';

export default  function (state = {}, { type, payload }) {
    switch (type) {
        case LOGIN_SUCCESS:
            return { ...state, ...payload };
        case LOGIN_FAILURE:
            return { ...state, ...payload };
        default:
            return state;
    }
}
