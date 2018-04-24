import React from 'react'
import PropTypes from 'prop-types'
// Importing the Bootstrap Grid to help responsive design
import {
  Row, 
  Col
} from "reactstrap";
// Importing custom styling
import "./Product.css"

const Product = ({ price, inventory, title }) => (
  <div>
    {/* Applied Bootstrap Grids */}
    <Row> 
      <Col xs="6" md="6"> 
        {/* Title of the item */}
        <div className="titleOfItem"> 
          {title} 
        </div>

        {/* Displaying the remaining items */}
        <div className="remainingItem">
          {inventory ? ` x ${inventory + " Remaining"}` : null}
        </div>
      </Col>
     
      <Col xs="6" md="6">
        {/* Displaying the price of the item */}
        <div className="priceOfItem">
          &#36;{price}
        </div>
      </Col> 
    </Row>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
