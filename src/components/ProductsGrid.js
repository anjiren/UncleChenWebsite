import React from 'react';
import { render } from 'react-dom';
import products from '../data/products';

export class ProductsGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var p = products['A']['A-6'];
    Object.entries(p).forEach(([key, value]) => {console.log(key, value)})
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

export default ProductsGrid;
