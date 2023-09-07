import React, { useEffect, useState } from 'react';
import './Code.css';
import ReactCodeInput from 'react-code-input';
import { props } from './Code.props';
import Button from 'components/Button/Button';
import { FormStore } from 'modules/LoanForm/store/Form.store';
import Congratulations from 'components/Congratulations/Congratulations';

export default function Code() {
  const { handleLoadAppData, handleSendCodeSign } = FormStore;
  const [code, setData] = useState('');
  const [sended, setSended] = useState(false);

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
      setSended(true);
    }
  };

  const handlePinChange = (pinCode: string) => {
    setPinCode(pinCode);
  };

  return (
    <>
      {sended ? (
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
