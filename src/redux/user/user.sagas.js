import { takeLatest, all, call, put } from 'redux-saga/effects';

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import UserActionTypes from './user.types';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpSuccess, signUpFailure} from './user.actions';


function* getUserSnapshot(user, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, user, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(
            signInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
        );
    } catch (error) {
        yield put(
            signInFailure(error)
        );
    }
}
export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getUserSnapshot(user);
    } catch (error) {
        yield put(
            signInFailure(error)
        );
    }
    
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getUserSnapshot(userAuth);
    } catch (error) {
        yield put(
            signInFailure(error)
        );
    }
    

} 

export function* onGoogleSignIn() {
    yield(takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle));
}

export function* signInWithEmailAndPassword({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getUserSnapshot(user);
    } catch (error) {
        yield put(
            signInFailure(error)
        );
    }
}

function* userSignOut() {
    try {
        yield auth.signOut();
        yield put(
            signOutSuccess()
        )
    } catch (error) {
        yield put(
            signOutFailure(error)
        );
    }
}

function* userSignUp({payload: {email, password, displayName}}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        // yield createUserProfileDocument(user, {displayName});
        yield put(
            signUpSuccess({user, additionalData: { displayName }})
        )
    } catch (error) {
        yield put(
            signUpFailure(error)
        )
    }
}

function* signInAfterSignUp({payload: {user, additionalData}}) {
    yield getUserSnapshot(user, additionalData);
}

export function* onEmailAndPasswordSignIn() {
    yield(takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmailAndPassword))
}

export function* onCheckUserSession() {
    yield(takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated))
}

export function* onUserSignOut() {
    yield(takeLatest(UserActionTypes.SIGN_OUT_START, userSignOut))
}

export function* onUserSignUpStart() {
    yield(takeLatest(UserActionTypes.SIGN_UP_START, userSignUp))
}

export function* onUserSignUpSuccess() {
    yield(takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp))
}

export default function* userSagas() {
    yield(all([
        call(onGoogleSignIn),
        call(onEmailAndPasswordSignIn),
        call(onCheckUserSession),
        call(onUserSignOut),
        call(onUserSignUpStart),
        call(onUserSignUpSuccess)
    ]))
}