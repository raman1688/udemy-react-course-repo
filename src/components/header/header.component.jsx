import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { hiddenSelector } from '../../redux/cart/cart.selector';
import { currentUserSelector } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

const Header = ({currentUser, hidden, signOutStart}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {
        currentUser ?
        <OptionLink as='div' onClick={signOutStart}> SIGN OUT </OptionLink>  
        :
        <OptionLink to='/signin'>
            SIGN IN
        </OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden? null : <CartDropdown />
    }
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector,
    hidden: hiddenSelector
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);