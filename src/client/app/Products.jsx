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
          // TODO: display the corresponding product grid
          <ProductsGrid />
        </div>
      </div>
    )
  }
}
