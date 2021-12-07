import { combineReducers } from "redux";

import plpReducer from "./plpReducer";

const rootReducer = combineReducers({
    plpReducer: plpReducer
});

export default rootReducer;