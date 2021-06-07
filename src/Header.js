import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = props => {
  const [state, dispatch] = useStateValue();
  const { basket, user } = state;
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
    else {
    }
  }
  console.log('user', user);
  return (
    <div className="header">
      <Link to="/">
        <img src='./logo.png' alt='img' className="header__logo" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.email : 'Guest'}
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
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
              {basket?.length}
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
