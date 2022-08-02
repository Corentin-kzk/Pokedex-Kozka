import React from 'react';
import './list.css'
const ListType = ({list}) => {
    return (
        <ol class="gradient-list">
            {list.map((list, index) => (
                <li key={Date.now() + index}>{list.type.name}</li>
              ))}
        </ol>
    );
};

export default ListType;