import {
  MENUITEMS,
  ITEMS_TO_SEND_IN_EACH_REQUEST as noOfItems,
} from "../../../../utils/constants";

const initialIndex = 0;
const lastIndex = 8;
const categoryData = {};
MENUITEMS.map((item) => {
  categoryData[item] = require(`../../../../public/${item}.json`);
});

const getInitialIndex = (pageNo) => {
  pageNo = Number(pageNo);
  if (pageNo == 0) return initialIndex;
  return initialIndex + pageNo * noOfItems;
};

const getLastIndex = (pageNo) => {
  pageNo = Number(pageNo);
  if (pageNo == 0) return lastIndex;
  return lastIndex + pageNo * noOfItems;
};

export default function categoryAPIHandler(req, res) {
  let { pageName, pageNo } = req.query;
  pageNo = Number(pageNo);
  if (pageNo === 0) {
    let data = { ...categoryData[pageName] };
    data.hits = data.hits.slice(getInitialIndex(pageNo), getLastIndex(pageNo));
    res.status(200).json(data);
  } else if (pageNo > 0) {
    let hitsData = categoryData[pageName].hits;
    let data = hitsData.slice(getInitialIndex(pageNo), getLastIndex(pageNo));
    res.status(200).json(data);
  }
}
