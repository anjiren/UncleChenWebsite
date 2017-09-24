import React from 'react';
import { Link } from 'react-router-dom';

// Components
export class ProductsPage extends React.Component {
  render() {
    return (
      <div className="uc-workspace-grid">
        <div className="uc-workspace-grid-box uc-workspace-grid-box--yellow">
          Featured
        </div>
        <div className="uc-workspace-grid-box">
          <Link
            className="uc-product-category-preview__link"
            to={`/products/A`}>
            Oils
          </Link>
        </div>
        <div className="uc-workspace-grid-box">
          <Link
            className="uc-product-category-preview__link"
            to={`/products/B`}>
            Sauces
          </Link>
        </div>
        <div className="uc-workspace-grid-box">
          <Link
            className="uc-product-category-preview__link"
            to={`/products/C`}>
            Seasonings
          </Link>
        </div>
        <div className="uc-workspace-grid-box">
          <Link
            className="uc-product-category-preview__link"
            to={`/products/D`}>
            Nuts
          </Link>
        </div>
        <div className="uc-workspace-grid-box">
          <Link
            className="uc-product-category-preview__link"
            to={`/products/E`}>
            Dried Goods
          </Link>
        </div>
      </div>
    )
  }
}

export default ProductsPage;
