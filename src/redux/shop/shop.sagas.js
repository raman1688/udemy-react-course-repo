import { takeEvery, call, put } from 'redux-saga/effects';

import shopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';

export function* fetchCollectionsStartAsync() {
    yield console.log('I am fired');
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}
export function* fetchCollectionsStart() {
    yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsStartAsync);
}