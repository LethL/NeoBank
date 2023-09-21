import React from 'react';
import congratulationsLogo from '../../images/card-surprise.png';
import './Congratulations.css';
import Button from '../../components/Button/Button';

export default function Congratulations() {
  const handleDoneApp = () => {
    window.location.href = '/';
    localStorage.clear();
  };

  return (
    <div className="congratulations" data-testid="congratulations">
      <img src={congratulationsLogo} alt="Congratulations" />
      <h2 className="congratulations__title">Congratulations! You have completed your new credit card.</h2>
      <p className="congratulations__text">Your credit card will arrive soon. Thank you for choosing us!</p>
      <Button onClick={handleDoneApp} text="View other offers of our bank" className="btn btn_blue" />
    </div>
  );
}
