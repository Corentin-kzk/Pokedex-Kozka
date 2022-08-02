import React from 'react';
import './list.css'
const ListType = ({list}) => {
    return (
        <ol className="gradient-list">
            {list.map((list, index) => (
                <li key={Date.now() + index}>{list.type.name}</li>
              ))}
        </ol>
    );
};

export default ListType;