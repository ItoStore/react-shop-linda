import React from 'react'

import './collection-item.styles.scss';

const CollectionItem = ({id, name, imageUrl, price}) => (
    <div className="collection-item" key={id}>
        <div className="image"
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className="collection-footer"> 
            <div className="name">{name}</div>
            <div className="price">{price}</div>
        </div>
    </div>
)  
export default CollectionItem;