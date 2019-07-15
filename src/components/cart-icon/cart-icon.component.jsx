import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions'; 

import './cart-icon.styles.scss';

const CartIcon = ({ToggleCartHidden}) => (
    <div className='cart-icon' onClick= {ToggleCartHidden}>
        <ShoppingBag className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);