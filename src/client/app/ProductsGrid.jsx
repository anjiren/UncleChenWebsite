import React from 'react';
import {render} from 'react-dom';

class ProductsGrid extends React.Component {

  render() {
    return (
      <div>
        hello my name is sherwin
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div>
        <ProductImage />
        <ProductDescription />
      </div>
    )
  }
}


class ProductImage extends React.Component {
  render() {
    return (
      <div>PRODUCT IMAGE</div>
    )
  }

}

class ProductDescription extends React.Component {
  render() {
    return (
      <div>PRODUCT DESCRIPTION</div>
    )
  }

}



export default ProductsGrid;
