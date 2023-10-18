import React, { useState, useEffect } from 'react';
import './Form.css';

function NewProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [cancelMessage, setCancelMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !category) {
      alert('Please fill in all the fields (Name, Description, and Category).');
      return;
    }

    if (!Number.isInteger(Number(quantity))) {
      alert('Quantity should be an integer.');
      setQuantity('');
      return;
    }

    if (isNaN(Number(price)) || Number(price) < 0) {
      alert('Price should be a non-negative number.');
      setPrice('');
      return;
    }

    alert(
      `Name: ${name}\nDescription: ${description}\nCategory: ${category}\nQuantity: ${quantity}\nPrice: $${price}`
    );
  };

  const handleCancel = () => {
    setCancelMessage('Cancelled!');
    setName('');
    setDescription('');
    setCategory('');
    setQuantity('');
    setPrice('');
  };

  useEffect(() => {
    if (cancelMessage) {
      const timeoutId = setTimeout(() => {
        setCancelMessage('');
      }, 1000); // Message will disappear after 1 second

      return () => clearTimeout(timeoutId); // Clear the timeout when the component unmounts
    }
  }, [cancelMessage]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><div></div>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><div></div>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        /><div></div>
        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        /><div></div>
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="button-container">
          <button className="blue-button" type="submit">
            Submit
          </button>
          <button className="grey-button" type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
        {cancelMessage && <p className="cancel-message">{cancelMessage}</p>}
      </form>
    </div>
  );
}

export default NewProduct;
