import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions'; 
import { cartSelectorItemCount } from '../../redux/cart/cart.selector';

import './cart-icon.styles.scss';

const CartIcon = ({ToggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick= {ToggleCartHidden}>
        <ShoppingBag className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapStateToProps = createStructuredSelector({
    itemCount: cartSelectorItemCount
})
const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);