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
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

// import Components for the application
import CategoryList from './components/category_list';
import CategoryOverview from './containers/category_overview';
import ItemDetail from './components/item_detail';

// import the root reducer
import reducers from './reducers';

// well.. create redux store
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// render virutal-dom into DOM
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <img src="https://s3-eu-west-1.amazonaws.com/aboutyoureactsample/about-you_react1.png" alt=""/>
        <h1>React Sample</h1>
        <Switch>
          <Route path="/category/onlyOne" component={ CategoryOverview }></Route>
          <Route path="/product/:id"  component={ ItemDetail }></Route>
          <Route path="/" component={ CategoryList }></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container'));
