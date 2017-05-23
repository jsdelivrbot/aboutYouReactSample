import { FETCH_ITEMS } from '../actions/fetch_items';

 export default function(state = [], action) {
   switch (action.type) {
     case FETCH_ITEMS:
      return [ action.payload.data, ...state ];
   }

   return state;
 }
