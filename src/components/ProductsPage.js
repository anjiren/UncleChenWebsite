import React from 'react';

// Components
import ProductsGrid from './ProductsGrid';

export class ProductsPage extends React.Component {
  render() {
    return (
      <div className="uc-workspace-grid">
        <div className="uc-workspace-grid-box uc-workspace-grid-box--yellow">
          Featured
        </div>
        <div className="uc-workspace-grid-box">
          Oils
        </div>
        <div className="uc-workspace-grid-box">
          Sauces
        </div>
        <div className="uc-workspace-grid-box">
          Seasonings
        </div>
        <div className="uc-workspace-grid-box">
          Nuts
        </div>
        <div className="uc-workspace-grid-box">
          Dried Goods
        </div>
      </div>
    )
  }
}

export default ProductsPage;
