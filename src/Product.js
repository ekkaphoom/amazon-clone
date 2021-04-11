import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        price,
        rating,
        image
      }
    })
  }
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

      <img src={image} alt='img' />
      <button onClick={() => addToBasket()} > Add to Basket</button>
    </div>
  )
}

Product.propTypes = {

}

export default Product;

