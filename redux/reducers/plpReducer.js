import * as t from '../types';
let initialState = {
    
};

const plpReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.addPlpData:
      let category = action.data.category 
      let data = action.data.categoryData;
      return {...state, [category] : data};
    case t.updatePlpData:
        return state;
    default:
      return {...state};
  }
};

export default plpReducer;