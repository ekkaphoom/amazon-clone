import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css'

const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              {/* Subtotal ({basket.length} item):
          <strong>{` ${value}`}</strong> */}

Subtotal ({0} item):
          <strong>{` ${0}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
        </small>
          </>
        )}
        decimalScale={2}
        // value={getBusketTotal(basket)}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
