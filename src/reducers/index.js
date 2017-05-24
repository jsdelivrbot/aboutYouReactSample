// import redux function to combine reducers
import { combineReducers } from 'redux';
// import category reducer
import CategoryReducer from './category_reducer';
// import items reducer
import ItemsReducer from './items_reducer';
// import singleItem reducer
import SingleItemReducer from './single_item_reducer';

// el root reducer!
const rootReducer = combineReducers({
  category: CategoryReducer,
  items: ItemsReducer,
  singleItem: SingleItemReducer
});

export default rootReducer;
