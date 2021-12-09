import * as t from "../types";

export function addPlpData(category, categoryData) {
  return { type: t.addPlpData, data: {category, categoryData} };e
}

export function updatePlpData(data) {
  return { type: t.updatePlpData, data: data };
}
