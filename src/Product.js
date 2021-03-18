import React from 'react'
import PropTypes from 'prop-types'
import './Product.css';

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p id={id + '_title'}>{title}</p>
        <p id={id + '_price'} className="product__price">
          <small>$</small>
          <strong>{price}</strong>
          <div className="product__rating">
            {Array(rating).fill().map((_, i) => (<p>☆</p>))}
          </div>
        </p>
      </div>

      <img src={image} />
      <button>Add to Basket</button>
    </div>
  )
}

Product.propTypes = {

}

export default Product;

