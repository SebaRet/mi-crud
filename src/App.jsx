import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(items.map(item => item.id === itemToEdit.id ? { ...item, value } : item));
      setItemToEdit(null);
    } else {
      setItems([...items, { id: Date.now(), value, isCompleted: false }]);
    }
  };

  const deleteItem = (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este elemento?');
    if (confirmDelete) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };

  const toggleComplete = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    ));
  };

  const clearAll = () => {
    if (window.confirm('¿Estás seguro de que deseas borrar TODOS los elementos? Esta acción no se puede deshacer.')) {
      setItems([]);
    }
  };

  const filteredItems = items.filter(item => 
    item.value.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>CRUD con LocalStorage</h1>
      
      <p className="counter">Total: {items.length}</p>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          className="crud-input"
          placeholder="Buscar elementos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: '100%', maxWidth: '500px', boxSizing: 'border-box' }}
        />
      </div>
      
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      
      {items.length > 0 && (
        <button 
          onClick={clearAll} 
          className="btn btn-delete" 
          style={{ marginBottom: '20px', width: '100%', maxWidth: '500px' }}
        >
          Borrar todos los elementos
        </button>
      )}

      <List 
        items={filteredItems} 
        deleteItem={deleteItem} 
        editItem={editItem} 
        toggleComplete={toggleComplete} 
      />
    </div>
  );
}

export default App;