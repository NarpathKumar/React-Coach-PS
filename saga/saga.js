import { takeEvery, delay, put, call } from "redux-saga/effects";
import axios from "axios";
import * as t from "../redux/types";

export function* fetch_products_async(action) {
  console.log("Inside saga function")
  if (action.data.id) {
    yield delay(2000);
    console.log("delayed by 2 seconds");
    let category = action.data.id;
    let pageNo = action.data.pageNo;
    let updatedData = yield call(
      axios.get,
      `http://localhost:3000/api/plp/${category}/${pageNo}`
    );
    updatedData = updatedData.data
    console.log(updatedData);
    
    yield put({ type: t.updatePlpData, data: { category, updatedData } });
  }
}

// watcher
export function* mySaga() {
  yield takeEvery(t.asyncPlpUpdate, fetch_products_async);
}
