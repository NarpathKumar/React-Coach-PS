const sortAscending = (data) => {
  let arr = data;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].minPrices > arr[j].minPrices) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log("sorted ascen");

  return arr;
};

const sortDescending = (data) => {
  let arr = data;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].minPrices < arr[j].minPrices) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

const bestseller = (data) => {
  return data.filter(
    (item) => data.activeProductData && data.activeProductData.bestseller
  );
};

export const plpSorting = (data, type) => {
  switch (type) {
    case "ascending":
      return sortAscending(data);
    case "descending":
      return sortDescending(data);
    case "bestseller":
      return bestseller(data);
    default:
      return data;
  }
};

const plpFetch = ()=>{
  
}