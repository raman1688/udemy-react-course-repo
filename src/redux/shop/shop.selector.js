import { createSelector } from 'reselect';

const selectCollections = state => state.shop;

export const collectionsSelector = createSelector(
    [selectCollections],
    shop => shop.collections
)

export const collectionSelectorForPreview = createSelector(
    [collectionsSelector],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const collectionSelector = collectionParam => createSelector(
    [collectionsSelector],
    collections => collections[collectionParam]
)

export const isFetchingSelector = createSelector(
    [selectCollections],
    shop => shop.isFetching
)

export const isCollectionLoaded = createSelector(
    [selectCollections],
    shop => !!shop.collections
)