import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router';
import { useStateValue } from './StateProvider';
import './Subtotal.css'

export const getBasketTotal = basket => basket?.reduce((amount, item) => {
  return item.price + amount;
}, 0)


const Subtotal = () => {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              {/* Subtotal ({basket.length} item):
          <strong>{` ${value}`}</strong> */}

          Subtotal ({basket?.length} item):
          <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
        </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        // value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
    </div >
  )
}

export default Subtotal
