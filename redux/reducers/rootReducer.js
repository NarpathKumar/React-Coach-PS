import { combineReducers } from "redux";

import plpReducer from "./plpReducer";
import pdpReducer from "./pdpReducer";

const rootReducer = combineReducers({
  plpReducer,
  pdpReducer,
});

export default rootReducer;
