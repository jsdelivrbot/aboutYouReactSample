// create item fetcher for given category

// import axios for http request
import axios from 'axios';

// export items constant to prevent typos in reducer etc.
export const FETCH_ITEMS = 'FETCH_ITEMS';

// export fetch function
export function fetchItems(items) {
  debugger
  const ITEMS = items.toString();
  const url = `https://m.aboutyou.de/api/products/v2/getProducts?productId=${ITEMS}`;
  const request = axios.get(url);

  return {
    type: FETCH_ITEMS,
    payload: request
  }
}
