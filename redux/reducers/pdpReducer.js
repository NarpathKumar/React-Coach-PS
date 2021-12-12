import * as t from "../types";
let initialState = {
  pdpData: {},
};

const pdpReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.addPDPdData:
      let data = {
        id: action.data.id,
        data: action.data.data,
      };
      return { ...state, pdpData: data };
    default:
      return { ...state };
  }
};

export default pdpReducer;
