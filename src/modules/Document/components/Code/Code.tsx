import React, { useEffect, useState } from 'react';
import './Code.css';
import ReactCodeInput from 'react-code-input';
import { props } from './Code.props';
import Button from 'components/Button/Button';
import { LoanStore } from 'modules/Loan/store/Loan.store';
import Congratulations from 'components/Congratulations/Congratulations';

export default function Code() {
  const [stepStorageValue, setStepStorageValue] = useState<string | null>(localStorage.getItem('status'));

  useEffect(() => {
    const handleLocalStorageChange = () => {
      setStepStorageValue(localStorage.getItem('status'));
    };
    window.addEventListener('localStorageChange', handleLocalStorageChange);
    return () => {
      window.removeEventListener('localStorageChange', handleLocalStorageChange);
    };
  }, []);

  const { handleLoadAppData, handleSendCodeSign } = LoanStore;
  const [code, setData] = useState('');

  useEffect(() => {
    const getCode = async () => {
      const sesCode = await handleLoadAppData();
      setData(sesCode.sesCode);
    };
    getCode();
  }, []);

  const [isPinCodeValid, setIsPinCodeValid] = useState(true);
  const [pinCode, setPinCode] = useState('');

  const checkPinCode = () => {
    const isPinCodeValid = pinCode === code;
    setIsPinCodeValid(isPinCodeValid);
    if (isPinCodeValid) {
      handleSendCodeSign(code);
    }
  };

  const handlePinChange = (pinCode: string) => {
    setPinCode(pinCode);
  };

  return (
    <>
      {stepStorageValue === 'step_code' ? (
        <Congratulations />
      ) : (
        <section className="code">
          <h2 className="code__title">Please enter confirmation code</h2>
          <ReactCodeInput
            value={pinCode}
            onChange={handlePinChange}
            isValid={isPinCodeValid}
            type="number"
            fields={4}
            name="pinCode"
            inputMode="numeric"
            {...props}
            className="code-input"
          />
          <p className="code__err-text">{!isPinCodeValid && 'Invalid confirmation code'}</p>
          <Button className="btn btn_blue btn_small" text="Send" onClick={checkPinCode} />
        </section>
      )}
    </>
  );
}
