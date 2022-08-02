import React from 'react';
import './list.css'
const ListAbylities = ({list}) => {
    return (
        <ol class="gradient-list">
            {list.map((list, index) => (
                <li key={Date.now() + index}>{list.ability.name}</li>
              ))}
        </ol>
    );
};

export default ListAbylities;