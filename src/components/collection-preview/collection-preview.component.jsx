import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

export const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <div className="title">{title.toUpperCase()}</div>
        <div className="preview">
            {
                items
                .filter( (item,idx) => ( idx < 4) )
                .map(({id, ...otherItemProps}) => {
                    return (
                        <CollectionItem key={id} {...otherItemProps}/>
                    )
                 })
            }
        </div> 
    </div>
)