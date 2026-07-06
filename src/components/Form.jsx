import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      setInputValue(itemToEdit.value);
    } else {
      setInputValue('');
    }
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addOrUpdateItem(inputValue);
      setInputValue('');
    }
  };

return (
  <form onSubmit={handleSubmit} className="crud-form">
    <input
      type="text"
      className="crud-input"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Escribe algo..."
    />
    <button type="submit" className="btn btn-submit">
      {itemToEdit ? 'Actualizar' : 'Agregar'}
    </button>
  </form>
);
}

export default Form;