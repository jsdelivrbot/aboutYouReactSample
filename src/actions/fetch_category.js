// create  category fetcher
// this action calls the "about you" API and returns the Items in the given category

// import Axios for http requests
import axios from 'axios';

// export category constant to prevent typos in reducer etc.
export const FETCH_CATEGORY = 'FETCH_CATEGORY';

// export fetch function
// since it's only one category no params needed
export function fetchCategory() {
  const CAT_NUMBER = '20250';
  const url = `https://m.aboutyou.de/api/products/v3/${CAT_NUMBER}`;
  const request = axios.get(url);

  return {
    type: FETCH_CATEGORY,
    payload: request
  }
}
