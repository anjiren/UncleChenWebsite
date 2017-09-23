import React from 'react';

// Components
import MainNav from './MainNav.jsx';
import ProductsGrid from './ProductsGrid.jsx';
export default class Products extends React.Component {
  render() {
    return (
      <div>
        <MainNav/ >
        <div className="uc-workspace">
          <ProductsGrid />
        </div>
      </div>
    )
  }
}
