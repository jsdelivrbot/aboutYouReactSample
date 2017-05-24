// import react base
import React, { Component } from 'react';
// import connector
// redux action binder, to make actions available in component
// Link from router
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// import action to fetch single item
import { fetchSingleItem } from '../actions/fetch_single_item';

// create component
class ItemDetail extends Component {
  constructor(props) {
    super(props);
  }
  // get item to display when component did mount to DOM
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSingleItem(id);
  }

  // that isn't really a good solution but for the sake of demonstrating it's okey I guess....
  // takes the items price and turns it into dezimal
  numberToPrice(num) {
    return num.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  }

  // puts the item into component
  renderItemDetail(product) {
    if(!product) return;

    const { name, id, image, min_price, brand } = product;
    const imageUrl = `https://cdn.aboutyou.de/file/${image.hash}?bg=ffffff&height=400&progressive=1&quality=90&trim=1&width=200`
    return(
      <div className="row">
        <div className="col-sm-6">
          <h4>{ name }</h4>
          <p><i>{ brand.name }</i></p>
          <p>Preis: <br/> €{ this.numberToPrice(min_price) }</p>
        </div>
        <div className="col-sm-6">
          <img src={ imageUrl }/>
        </div>
      </div>
    );
  }

  // renders to DOM
  render() {
    return(
      <div>
        <Link className="btn btn-secondary" to="/category/onlyOne">
          Zurück
        </Link>
        { this.renderItemDetail(this.props.singleItem.product) }
      </div>
    );
  }
}

// map state to props
function mapStateToProps({ singleItem }) {
  return {
    singleItem
  };
}

// map dispatch to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSingleItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
