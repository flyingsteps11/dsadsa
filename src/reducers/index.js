import {combineReducers} from "redux";

import {user} from "./users.reducer";
import {alert} from "./alert.reducer";
import {auth} from "./auth.reducer";

const rootReducer = combineReducers({
    user,
    alert,
    auth
});
export default rootReducer;