import React, { useState } from 'react';

const CustomAlert = ({ message, buttonText, expectedInput, onConfirm }) => {
  const [inputValue, setInputValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleConfirm = () => {
    if (inputValue === expectedInput) {
      onConfirm(true);
    } else {
      onConfirm(false);
    }
    setInputValue(''); // Clear input value
    setShowAlert(false); // Close the alert
  };

  return (
    <>
      <button onClick={handleButtonClick}>{buttonText}</button>
      {showAlert && (
        <div className="custom-alert">
          <p>{message}</p>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      )}
    </>
  );
};

export default CustomAlert;
