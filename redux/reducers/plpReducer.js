import * as t from "../types";
let initialState = {
  pageNo: {},
};

const plpReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.addPlpData:
      let category = action.data.category;
      let data = action.data.categoryData;

      return {
        ...state,
        [category]: data,
        pageNo: { ...state.pageNo, [category]: 0 },
      };
    case t.updatePlpData:
      let updatedData = action.data.updatedData;
      let toUpdateCategory = action.data.category;
      return {
        ...state,
        [toUpdateCategory]: {
          ...state[toUpdateCategory],
          hits: [ ...state[toUpdateCategory].hits, ...updatedData ],
        },
        pageNo: { ...state.pageNo, [toUpdateCategory]: state.pageNo[toUpdateCategory] + 1 },
      };
    default:
      return { ...state };
  }
};

export default plpReducer;
