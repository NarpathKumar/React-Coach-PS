import * as t from "../types";

export function addPlpData(category, categoryData) {
  return { type: t.addPlpData, data: { category, categoryData } };
}

export function updatePlpData(category, updatedData) {
  return { type: t.updatePlpData, data: { category, updatedData } };
}

export function asyncUpdatePlpData(id, pageNo) {
  console.log("Insie async action")
  return { type: t.asyncPlpUpdate, data: { id, pageNo } };
}
