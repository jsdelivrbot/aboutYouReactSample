// import react base
import React, { Component } from 'react';
// import connector
// redux action binder, to make actions available in component
// Link from router
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// import actions to fetch category && all items in that category
import { fetchItems } from '../actions/fetch_items';
import { fetchCategory } from '../actions/fetch_category';


// create component
class CategoryOverview extends Component {
  constructor(props) {
    super(props)
  }

  // get category and trigger fetchItems when mounted
  componentDidMount() {
    this.props.fetchCategory()
    .then(({ payload: { data } }) => {
      this.props.fetchItems(data.productIds);
    });
  }

  // I guess that's not DRY.. created that function in item_detail already... bad bad practice... Sorry :/
  numberToPrice(num) {
    return num.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  }

  // puts all the items into the component
  renderItems(items) {
    if(!items.length) return;

    return items[0].map(({ product }) => {

      const { name, brand, image, min_price, id } = product;
      const imageUrl = `https://cdn.aboutyou.de/file/${image.hash}?bg=ffffff&height=400&progressive=1&quality=90&trim=1&width=100`;

      return (
        <div key={ id } className="col-sm-6 col-md-4">
          <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'black'}}>
            <div className="thumbnail">
              <img src={ imageUrl } alt=""/>
              <div className="caption">
                <h4>{ name }</h4>
                <p>{ brand.name } <br/> €{ this.numberToPrice(min_price) }</p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  }

  // render into DOM
  render() {
    return(
      <div>
        <Link className="btn btn-secondary" to="/">
          Zurück
        </Link>
        <h4>Items</h4>
        <div className="row">
         { this.renderItems(this.props.items) }
       </div>
      </div>
    )
  }
}



// map state to props
function mapStateToProps({ category, items }) {
  return {
    category,
    items
  };
}

// map dispatch to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchItems, fetchCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryOverview);
