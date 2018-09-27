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

    const productsInCategory = [];
    Object.entries(products).forEach(([subcategoryName, subcategoryProducts]) => {
      Object.entries(subcategoryProducts).forEach(([productName, productData]) => {
        if (productName !== 'metadata') {
          productsInCategory.push(productData);
        }
      });
    });

    /**
     * Format sizes for a product as a list
     */
    function getSizes(productData) {
      if (productData.metadata.sizes) {
        return productData.metadata.sizes.map((size, index) => {
          return <li key={index}>{size}</li>;
        });
      }
    }

    const productsComponents = productsInCategory.map(productData => {
      const imageUri = productData.metadata.images[0];
      return (
        <div className="uc-product-preview" key={productData.metadata.name_en}>
          <div className="uc-product-preview-img-wrapper">
            <img className="uc-product-preview-img" type="image/jpg" src={imageUri} />
          </div>
          <div className="uc-product-preview-text">
            <h5>{productData.metadata.name_en}</h5>
            <div>
              {getSizes(productData)}
            </div>
          </div>
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
