import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  NavigationContainer,
  NavLinksContainer,
  GreetUserContainer,
  GreetUserContainerText,
  LogoContainer,
  LogoText,
  NavLink,
} from './navigation.styles.jsx';
import { ReactComponent as CrwnLogo } from '../../assets/Lion-Head.svg';
import CartDropdown from '../../components/shoppingCart/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/shoppingCart/cart-icon/cart-icon.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.actions.js';

const Navigation = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => dispatch(signOutStart());
  const greetingName = currentUser ? currentUser.data.email : null;

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
          <LogoText>BCOOL</LogoText>
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <GreetUserContainer>
        {currentUser ? (
          <GreetUserContainerText>
            Welcome {greetingName ? greetingName : 'Guest'}
          </GreetUserContainerText>
        ) : null}
      </GreetUserContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
