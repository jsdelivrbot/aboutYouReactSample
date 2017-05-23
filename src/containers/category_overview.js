import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// import itemList component
import ItemList from '../components/item_list';

// import action
import { fetchItems } from '../actions/fetch_items';
import { fetchCategory } from '../actions/fetch_category';



class CategoryOverview extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCategory()
    .then(({ payload: { data } }) => {
      this.props.fetchItems(data.productIds)

      .then(({ payload: { data } }) => {
        debugger
      });
    });
  }

  renderItems(items) {
    if(!items.length) return;
    return items[0].map(({ product }) => {
      return (
        <li key={product.id}>
          <Link to={ `/product/${product.id}` }>
              { product.name }
          </Link>
        </li>
      );
    });
  }

  render() {
    return(
      <div>
        <h4>Items</h4>
        <ul>
         { this.renderItems(this.props.items) }
        </ul>
      </div>
    )
  }
}







function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchItems, fetchCategory }, dispatch)
}
function mapStateToProps({ category, items }) {
  return {
    category,
    items
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryOverview);
