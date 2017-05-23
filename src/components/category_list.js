// this is the most parent component for the About You App
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// since there's nothing else to be exported, export default is appropriated to use ;)
class CategoryList extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' };
  }
  // since there is only ONE category we won't need any type of list..
  // but if there were multiple categories we could do something like
  // this:
  //
  // renderCategories(categories) {
  //   return categories.map(category => {
  //     return (
  //       <li>
  //         <Link id={category} to={ `/category/${category.id}` } > { category } </Link>
  //       </li>)
  //     });
  // }



  // render the CategoryList component
  render() {
    return(
      <div>
        <h1>About You</h1>
      <h3>Category</h3>
      <ul>
        <li>
          <Link to="/category/onlyOne"> Only Category</Link>
        </li>
      </ul>
      </div>
    );
  }
};

export default CategoryList;
