import * as t from "../types";

export function addPlpData(data) {
  return { type: t.addPlpData, data: data };
}

export function updatePlpData(data) {
  return { type: t.updatePlpData, data: data };
}
