import { FETCH_SINGLE_ITEM } from '../actions/fetch_single_item';

 export default function(state = {}, action) {
   debugger
   switch (action.type) {
     case FETCH_SINGLE_ITEM:
     const item = action.payload.data[0];
      return { ...item};
   }

   return state;
 }
