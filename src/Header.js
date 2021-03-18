import React from 'react'
import './Header.css'
import PropTypes from 'prop-types'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <div className="header">
      <Link to="/">
        <img src='./logo.png' className="header__logo" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">
            Hello,Sign in
           </span>
          <span className="header__optionLineTwo">
            Account
          </span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">
            Returns
           </span>
          <span className="header__optionLineTwo">
            & Orders
          </span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">
            Your
           </span>
          <span className="header__optionLineTwo">
            Prime
          </span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">

            <ShoppingBasketIcon />
            <span className="header__basketCount">
              0
          </span>
          </div>
        </Link>
      </div>

    </div>
  )
}

Header.propTypes = {

}

export default Header
