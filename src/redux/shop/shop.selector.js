import { createSelector } from 'reselect';

const selectCollections = state => state.shop;

export const collectionsSelector = createSelector(
    [selectCollections],
    shop => shop.collections
)

export const collectionSelectorForPreview = createSelector(
    [collectionsSelector],
    collections => Object.keys(collections).map(key => collections[key])
)

export const collectionSelector = collectionParam => createSelector(
    [collectionsSelector],
    collections => collections[collectionParam]
)