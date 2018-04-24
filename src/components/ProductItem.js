import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
// Importing custom styles
import "./ProductItem.css";
// Import Bootstrap
import {
  Row, 
  Col
} from "reactstrap";


const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="container"> 
  <div className="card">
    <Row> 
      <Col xs="12" md="4"> 
        {/* Display image retreiving from the JSON */}
        <img 
          className="productImage"
          src={product.imageUrl}
          alt="Watches"/>
      </Col>

      <Col xs="12" md="8">
        {/* Content goes here */}
        <Product
          title={product.title}
          price={product.price}
          inventory={product.inventory} 
          imageUrl={product.imageUrl} />

        {/* Implementing custom styles to the button */}
        <button
          className="buttonStyles"
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
      </Col>
    </Row>
  </div>
  </div>
  
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
