import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchSingleItem } from '../actions/fetch_single_item';

class ItemDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    debugger
    this.props.fetchSingleItem(id);
  }

  something() {
    console.log(this.props.singleItem);
  }
  render() {
    return(
      <div>
        <h1>{this.props.singleItem}</h1>
      </div>
    );
  }
}

function mapStateToProps({ items }, ownProps) {
  return {
    singleItem: items
  };
}

export default connect(null, { fetchSingleItem })(ItemDetail);
