import React from 'react';
import { useAlert } from 'react-alert';

const CustomAlert = ({ message, onAction, onClose }) => {
  const alert = useAlert();

  const handleAction = () => {
    onAction();
    alert.remove(alert);
  };

  const handleClose = () => {
    onClose();
    alert.remove(alert);
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleAction}>Action</button>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default CustomAlert;
