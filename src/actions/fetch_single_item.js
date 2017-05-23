// create item fetcher for given category

// import axios for http request
import axios from 'axios';

// export items constant to prevent typos in reducer etc.
export const FETCH_SINGLE_ITEM = 'FETCH_SINGLE_ITEM';

// export fetch function
export function fetchSingleItem(id) {
  debugger
  const url = `https://m.aboutyou.de/api/products/v2/getProducts?productId=${id}`;
  const request = axios.get(url);

  return {
    type: FETCH_SINGLE_ITEM,
    payload: request
  }
}
