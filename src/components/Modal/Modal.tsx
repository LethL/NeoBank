import React, { useState } from 'react';
import Modal from 'react-modal';
import { ModalProps } from './Modal.types';
import Button from 'components/Button/Button';
import './Modal.css';
import closeLogo from 'src/images/close-icon.svg';

export default function ModalPopup({ isOpen, onClose }: ModalProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const closeModal = () => {
    setCurrentStep(1);
    onClose();
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '45%',
      minWidth: '320px',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  };

  return (
    <Modal style={customStyles} isOpen={isOpen} ariaHideApp={false}>
      {currentStep === 1 && (
        <div>
          <h2>Deny application</h2>
          <img className="modal__close-icon" onClick={closeModal} src={closeLogo} alt="close modal" />
          <p>You exactly sure, you want to cancel this application?</p>
          <div className="modal__btn-wrapper">
            <Button text="Deny" onClick={nextStep} className="btn btn_red btn_small mr-40" />
            <Button text="Cancel" onClick={closeModal} className="btn btn_blue btn_small" />
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <h2>Deny application</h2>
          <img className="modal__close-icon" onClick={closeModal} src={closeLogo} alt="close modal" />
          <p>Your application has been deny!</p>
          <div className="modal__btn-wrapper">
            <Button text="Go home" onClick={closeModal} className="btn btn_blue btn_medium" />
          </div>
        </div>
      )}
    </Modal>
  );
}
