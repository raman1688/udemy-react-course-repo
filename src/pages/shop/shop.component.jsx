import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import collectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionContainer from '../collection/collection.container';

const ShopPage = ({ fetchCollectionsStart, match }) => {
    
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]); 

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={collectionsOverviewContainer} />
            <Route exact path={`${match.path}/:collectionType`} component={CollectionContainer} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);