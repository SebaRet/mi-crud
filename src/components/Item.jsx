import React from 'react';

function Item({ item, deleteItem, editItem, toggleComplete }) {
  return (
    <li className="crud-item">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input 
          type="checkbox" 
          checked={item.isCompleted || false} 
          onChange={() => toggleComplete(item.id)}
          style={{ cursor: 'pointer' }}
        />
        <span 
          className="item-text"
          style={{ 
            textDecoration: item.isCompleted ? 'line-through' : 'none',
            color: item.isCompleted ? 'var(--text)' : 'var(--text-h)'
          }}
        >
          {item.value}
        </span>
      </div>
      <div>
        <button 
          onClick={() => editItem(item)} 
          className="btn btn-edit"
          disabled={item.isCompleted}
          style={{ opacity: item.isCompleted ? 0.5 : 1, cursor: item.isCompleted ? 'not-allowed' : 'pointer' }}
        >
          Editar
        </button>
        <button onClick={() => deleteItem(item.id)} className="btn btn-delete">
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default Item;