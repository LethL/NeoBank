import React, { useEffect } from 'react';
import './SubscribeForm.css';
import mailLogo from '../../../../images/email.svg';
import sendLogo from '../../../../images/send.svg';

export default function SubscribeForm() {
  const [isSend, setIsSend] = React.useState('false');

  const setSend = () => {
    setIsSend('true');
    localStorage.setItem('isSend', 'true');
  };

  const setNotSend = () => {
    setIsSend('false');
    localStorage.setItem('isSend', 'false');
  };

  useEffect(() => {
    const savedValue = localStorage.getItem('isSend');
    setIsSend(savedValue!);
  }, []);

  return (
    <section className="subscribe">
      <a href="#" target="_blank" className="subscribe__link">
        Support
      </a>
      <h2 className="subscribe__title">Subscribe Newsletter & get</h2>
      <h3 className="subscribe__title subscribe__title_subtitle">Bank News</h3>
      {isSend !== 'false' ? (
        <h4 onClick={setNotSend}>You are already subscribed to the bank newsletter</h4>
      ) : (
        <form className="subscribe__form">
          <div className="subscribe__form-wrapper">
            <img src={mailLogo} alt="email logo" />
            <input className="subscribe__form-input" type="email" placeholder="Your email" required />
          </div>
          <button type="submit" className="subscribe__form-btn" onClick={setSend}>
            <img className="subscribe__form-btn-img" src={sendLogo} alt="send email" />
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}
