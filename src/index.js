// create the applications basic structure

// import react,
// redux,
// middleware
// router
// && index component
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

// import App from './components/app';
import CategoryList from './components/category_list';
import CategoryOverview from './containers/category_overview';
import ItemDetail from './components/item_detail';

import reducers from './reducers';
import { root } from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

// well.. create redux store
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// render virutal-dom into DOM
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/category/onlyOne" component={ CategoryOverview }></Route>
          <Route path="/product/:id"  component={ ItemDetail }></Route>
          <Route path="/" component={ CategoryList }></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container'));
