import { createSelector } from 'reselect';

const selectCollections = state => state.shop;

export const collectionsSelector = createSelector(
    [selectCollections],
    shop => shop.collections
)