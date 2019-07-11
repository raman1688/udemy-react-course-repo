import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends Component {
    constructor() {
        super();
        this.state = {
            sections: [
              {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                linkUrl: 'hats',
                id: 1
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                linkUrl: 'jackets',
                id: 2
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                linkUrl: 'sneakers',
                id: 3
              },
              {
                title: 'women',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                linkUrl: 'women',
                size: 'large',
                id: 4
              },
              {
                title: 'men',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                linkUrl: 'men',
                size: 'large',
                id: 5
              }
            ]
        };
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...restProps}) => <MenuItem key={id} {...restProps} />)}
            </div>
        );
    }
}

export default Directory;