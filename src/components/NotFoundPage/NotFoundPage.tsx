import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFoundLogo from 'src/images/404-err.png';
import './NotFoundPage.css';

export default function NotFoundPage() {
  const history = useNavigate();

  function goBack() {
    history(-1);
  }

  return (
    <section className="not-found">
      <div className="not-found__wrapper">
        <h2 className="not-found__title">Oops....</h2>
        <h2 className="not-found__title">Page not found</h2>
        <p className="not-found__text">This Page doesn`t exist or was removed! We suggest you go back.</p>
        <button onClick={goBack} className="not-found__btn">
          Go back
        </button>
      </div>
      <img src={notFoundLogo} alt="page not found" className="not-found__img" />
    </section>
  );
}
