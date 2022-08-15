import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/shoppingCart/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/shoppingCart/cart-icon/cart-icon.component";
import { CartContext } from "../../components/context/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = (props) => {

  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
