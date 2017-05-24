// import constant to prevent typos
import { FETCH_SINGLE_ITEM } from '../actions/fetch_single_item';

// export reducer
// returns one specific item
export default function(state = {}, action) {
   switch (action.type) {
     case FETCH_SINGLE_ITEM:
     const item = action.payload.data[0];
      return { ...item};
   }

   return state;
 }
