import { all, call, takeLatest, put } from 'redux-saga/effects';

import userActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

function* clearCartItems() {
    yield put(
        clearCart()
    )
}
export function* onUserSignout() {
    yield(takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartItems))
}
export default function* cartSagas() {
    yield(all([
        call(onUserSignout)
    ]))
}