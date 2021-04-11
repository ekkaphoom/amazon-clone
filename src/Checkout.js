import React from 'react'
import Subtotal from './Subtotal'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

const Checkout = (props) => {
  const [{ basket }, dispatch] = useStateValue();
  const renderBasket = basket => (
    <p>
      {
        basket.map(b => {
          console.log('basket', b);
          const {
            id,
            title,
            price,
            rating,
            image
          } = b;
          return <CheckoutProduct id={id}
            title={title}
            price={price}
            rating={rating}
            image={image} />
        })
      }
    </p>
  );

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__ad">Ads is here</div>
        <div>
          <h2 className="checkout__title">Your Shopping Basket
          </h2>
          {renderBasket(basket)}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>


    </div>
  )
}

Checkout.propTypes = {

}

export default Checkout

