import React, { useState, useEffect } from 'react';
import './Form.css';

function ShopForm() {
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [cancelMessage, setCancelMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data1 || !data2) {
        alert('Please enter data in both fields');
      } else {
        alert(`Name: ${data1}, \nDescription: ${data2}`);
      }

    
  };

  const handleCancel = () => {
    setCancelMessage('Cancelled!');
    setData1(''); // Reset data1
    setData2(''); // Reset data2
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
          value={data1}
          onChange={(e) => setData1(e.target.value)}
        /><div></div>
        <input
          type="text"
          placeholder="Description"
          value={data2}
          onChange={(e) => setData2(e.target.value)}
        />
        <div className="button-container">
          <button className="blue-button" type="submit">Submit</button>
          <button className="grey-button" type="button" onClick={handleCancel}>Cancel</button>
        </div>
        {cancelMessage && <p className="cancel-message">{cancelMessage}</p>}
      </form>
    </div>
  );
}

export default ShopForm;