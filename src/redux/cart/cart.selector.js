import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const hiddenSelector = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const cartItemSelector = createSelector(
    [selectCart],
    cart => cart.cartItems
)
export const cartSelectorItemCount = createSelector(
    [selectCart],
    cart => cart.cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)
)
export const cartTotalSelector = createSelector(
    [selectCart],
    cart => cart.cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price, 0)
)
 