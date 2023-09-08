import React, { useEffect, useState } from 'react';
import './Sign.css';
import documentLogo from 'src/images/document-logo.svg';
import Button from 'components/Button/Button';
import SuccessText from 'components/SuccessText/SuccessText';
import { LoanStore } from 'modules/Loan/store/Loan.store';

export default function Sign() {
  const [stepStorageValue, setStepStorageValue] = useState<string | null>(localStorage.getItem('credit'));

  useEffect(() => {
    const handleLocalStorageChange = () => {
      setStepStorageValue(localStorage.getItem('credit'));
    };
    window.addEventListener('localStorageChange', handleLocalStorageChange);
    return () => {
      window.removeEventListener('localStorageChange', handleLocalStorageChange);
    };
  }, []);

  const [isChecked, setIsChecked] = useState(false);

  const { handleSendPDocumentSign } = LoanStore;

  function onSubmit() {
    handleSendPDocumentSign();
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
      {stepStorageValue === 'step_signing' ? (
        <SuccessText
          title="Documents have been successfully signed and sent for approval"
          text="Within 10 minutes you will be sent a PIN code to your email for confirmation"
        />
      ) : (
        <section className="sign">
          <div className="sign__header">
            <h2 className="sign__title">Signing of documents</h2>
            <span className="sign__title-info">Step 4 of 5</span>
          </div>
          <p className="sign__text">
            Information on interest rates under bank deposit agreements with individuals. Center for Corporate
            Information Disclosure. Information of a professional participant in the securities market. Information
            about persons under whose control or significant influence the Partner Banks are. By leaving an application,
            you agree to the processing of personal data, obtaining information, obtaining access to a credit history,
            using an analogue of a handwritten signature, an offer, a policy regarding the processing of personal data,
            a form of consent to the processing of personal data.
          </p>
          <a
            target="_blank"
            className="sign__link"
            href="https://neostudy.neoflex.ru/pluginfile.php/108672/mod_assign/intro/credit-card-offer.pdf"
            rel="noreferrer">
            <img src={documentLogo} alt="document logo" />
            <p>Information on your card</p>
          </a>
          <div className="sign__btns">
            <label className="table__ckeckbox">
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />I agree
            </label>
            <Button
              text="Send"
              disabled={!isChecked}
              type="submit"
              className="btn btn_blue btn_big"
              onClick={onSubmit}
            />
          </div>
        </section>
      )}
    </>
  );
}
