import React from 'react';

function Item({ item, deleteItem, editItem }) {
return (
  <li className="crud-item">
    <span className="item-text">{item.value}</span>
    <div>
      <button onClick={() => editItem(item)} className="btn btn-edit">Editar</button>
      <button onClick={() => deleteItem(item.id)} className="btn btn-delete">Eliminar</button>
    </div>
  </li>
);
}

export default Item;