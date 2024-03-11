import React from 'react';
import './Modal.css'; // Make sure this points to your CSS file for styling

const Modal = ({
  isOpen,
  title,
  onClose,
  content,
  onCustomAction,
  customActionText = "Deploy", // Default text for the action button
  secondaryAction, // Optional prop for a secondary action
  secondaryActionText // Optional text for the secondary action button
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header" style={{ fontFamily: 'ProductSans-Bold' }}>
          <h3 className="modal-title">{title}</h3>
          <button type="button" onClick={onClose} className="close-button">
            &times;
          </button>
        </div>
        <div className="modal-body">
          {content}
        </div>
        <div className="modal-footer">
          {onCustomAction && (
            <button onClick={onCustomAction} className="modal-action-button" style={{ fontFamily: 'ProductSans-Bold' }}>
              {customActionText}
            </button>
          )}
          {secondaryAction && secondaryActionText && (
            <button onClick={secondaryAction} className="modal-secondary-action-button" style={{ fontFamily: 'ProductSans-Bold', marginLeft: '10px' }}>
              {secondaryActionText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
