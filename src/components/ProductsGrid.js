import React from 'react';
import { render } from 'react-dom';

export class ProductsGrid extends React.Component {
  render() {
    return (
      <div>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}

export class Product extends React.Component {
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

export default ProductsGrid;
