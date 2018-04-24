import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
// Importing custom styles
import "./Cart.css";

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div className="cartOutput">
         {/* Display image as the item gets added to the cart */}
        <img 
          className="productCheckoutImage"
          src={product.imageUrl} 
          alt="Watches"/>
      
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id} />
      </div>
    ) 
  ) : (
    <em>Your cart is empty</em>
  )
  return (
    <div>
      <h3 className="cartTitle">Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      {/* Display the quantity */}
      
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}




export default Cart
