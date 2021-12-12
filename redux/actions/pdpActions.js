import * as t from "../types";

export function addPdpData(id, data) {
  return { type: t.addPDPdData, data: {id, data} };
}
