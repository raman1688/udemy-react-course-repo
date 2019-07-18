
import React from 'react';
import { connect }  from 'react-redux';

import { CollectionFooterContainer, CollectionItemContainer, CustomButtonContainer, ImageContainer } from './collection-item.styles';
import {addItem} from '../../redux/cart/cart.actions';

//import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({item, addItem}) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </CollectionFooterContainer>
      <CustomButtonContainer onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
    addItem: item =>  dispatch(addItem(item)) 
})

export default connect(null, mapDispatchToProps)(CollectionItem);