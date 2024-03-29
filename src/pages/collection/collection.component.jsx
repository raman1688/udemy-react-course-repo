import React from 'react';
import { connect } from 'react-redux';

import './collection.styles.scss';
import { collectionSelector } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.components';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
      <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  };
const mapStateToProps = (state, ownprops) => ({
    collection: collectionSelector(ownprops.match.params.collectionType)(state)
})

export default connect(mapStateToProps)(CollectionPage);