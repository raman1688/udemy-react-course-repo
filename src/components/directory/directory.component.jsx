import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { directorySelector } from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {sections.map(({id, ...restProps}) => <MenuItem key={id} {...restProps} />)}
    </div>
);

const mapStateToProps = createStructuredSelector({
  sections: directorySelector
})

export default connect(mapStateToProps)(Directory);