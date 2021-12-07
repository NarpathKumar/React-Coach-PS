import * as t from '../types';
let initialState = {
    
};

const plpReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.addPlpData:
      let data = action.data;
      return {...state, data};
    case t.updatePlpData:
        return state;
    default:
      return {...state};
  }
};

export default plpReducer;