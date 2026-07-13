import React from 'react';
import Item from './Item';

function List({ items, deleteItem, editItem, toggleComplete }) {
  return (
    <ul className="crud-list">
      {items.map((item) => (
        <Item 
          key={item.id} 
          item={item} 
          deleteItem={deleteItem} 
          editItem={editItem} 
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default List;