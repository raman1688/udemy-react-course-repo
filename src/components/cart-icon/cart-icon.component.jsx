import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions'; 

import './cart-icon.styles.scss';

const CartIcon = ({ToggleCartHidden, cartItems}) => (
    <div className='cart-icon' onClick= {ToggleCartHidden}>
        <ShoppingBag className='shopping-icon' />
        <span className='item-count'>{cartItems.length === 0 ? 0 : cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)}</span>
    </div>
)
const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})
const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);