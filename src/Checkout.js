import React from 'react'
import PropTypes from 'prop-types'
import './Checkout.css'

const Checkout = (props) => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__ad">Ads is here</div>
        <div><h2 className="checkout__title">Your Shopping Basket</h2></div>
      </div>
      <div className="checkout__right"><h2>The subtotal is here!</h2></div>


    </div>
  )
}

Checkout.propTypes = {

}

export default Checkout

