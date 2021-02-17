import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const MAX_ITEMS_TO_BE_SHOWN = 4;

const CollectionPreview = ({title, items}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items
          .filter((item, index) => index < MAX_ITEMS_TO_BE_SHOWN)
          .map(({ id, ...restItemProps }) => (
            // <div key={item.id}>{item.name}</div>
            <CollectionItem key={id} {...restItemProps}/>
        ))
      }
    </div>
  </div>
)

export default CollectionPreview;