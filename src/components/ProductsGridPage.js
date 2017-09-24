import React from 'react';
import { render } from 'react-dom';
import productsData from '../data/products';

export class ProductsGridPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const category = this.props.match.params.category;
    const products = productsData[category];

    if (!products) {
      return <NotFoundPage />
    }

    // i.e. 'Sesame Oils' in 'Oils';
    const productsInCategory = [];
    Object.entries(products).forEach(([subcategoryName, subcategoryProducts]) => {
      Object.entries(subcategoryProducts).forEach(([productName, productData]) => {
        if (productName !== 'metadata') {
          productsInCategory.push(productData);
        }
      });
    });

    const productsComponents = productsInCategory.map(productData => {
      const imageUri = productData.metadata.images[0];
      return (
        <div className="uc-product-preview" key={productData.metadata.name_en}>
          <img className="uc-product-preview-img" type="image/jpg" src={imageUri} />
          {productData.metadata.name_en}
        </div>
      )
    });

    return (
      <div>
        {productsComponents}
      </div>
    );
  }
}

export class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProductImage />
        <ProductDescription />
      </div>
    )
  }
}

export class ProductImage extends React.Component {
  render() {
    return (
      <div>PRODUCT IMAGE</div>
    )
  }

}

export class ProductDescription extends React.Component {
  render() {
    return (
      <div>PRODUCT DESCRIPTION</div>
    )
  }

}

export default ProductsGridPage;
