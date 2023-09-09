import React, { useEffect, useState } from 'react';
import './Table.css';
import { LoanStore } from 'modules/Loan/store/Loan.store';
import { PaymentScheduleEntity } from 'domains/PaymentSchedule.entity';
import ModalPopup from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import SuccessText from 'components/SuccessText/SuccessText';

export default function Table() {
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

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const { handleSendPaymentSchedule } = LoanStore;

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSendPaymentSchedule();
  };

  const storedDocument = localStorage.getItem('Document');

  let paymentSchedule: PaymentScheduleEntity[];

  if (storedDocument) {
    const documentData = JSON.parse(storedDocument);
    paymentSchedule = documentData.credit.paymentSchedule;
  } else {
    paymentSchedule = [];
  }

  const [paymentScheduleData, setData] = useState<PaymentScheduleEntity[]>(paymentSchedule);
  const [sortBy, setSortBy] = useState<
    'number' | 'date' | 'debtPayment' | 'interestPayment' | 'totalPayment' | 'remainingDebt' | undefined
  >(undefined);

  const handleSort = (
    column: 'number' | 'date' | 'debtPayment' | 'interestPayment' | 'totalPayment' | 'remainingDebt'
  ) => {
    if (column === sortBy) {
      setData([...paymentScheduleData].reverse());
    } else {
      setData(
        [...paymentScheduleData].sort((a, b) => {
          if (column === 'number') {
            return b.number - a.number;
          }
          if (column === 'debtPayment') {
            return b.debtPayment - a.debtPayment;
          }
          if (column === 'interestPayment') {
            return b.interestPayment - a.interestPayment;
          }
          if (column === 'totalPayment') {
            return b.totalPayment - a.totalPayment;
          }
          if (column === 'remainingDebt') {
            return b.remainingDebt - a.remainingDebt;
          } else {
            return b.date.localeCompare(a.date);
          }
        })
      );
    }
    setSortBy(column);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="table-section">
      {stepStorageValue === 'step_payment' ? (
        <SuccessText title="Documents are formed" text="Documents for signing will be sent to your email" />
      ) : (
        <form className="form" onSubmit={onSubmit}>
          <div className="form__column">
            <div>
              <div className="form__wrapper">
                <h2 className="form__title form__title_accent">Payment Schedule</h2>
                <p className="form__steps form__steps_three">Step 3 of 5</p>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="table__title">
                  <th onClick={() => handleSort('number')}>NUMBER{sortBy === 'number' ? '▼' : '▲'}</th>
                  <th onClick={() => handleSort('date')}>DATE{sortBy === 'date' ? '▼' : '▲'}</th>
                  <th onClick={() => handleSort('totalPayment')}>
                    TOTAL PAYMENT{sortBy === 'totalPayment' ? '▼' : '▲'}
                  </th>
                  <th onClick={() => handleSort('interestPayment')}>
                    INTEREST PAYMENT{sortBy === 'interestPayment' ? '▼' : '▲'}
                  </th>
                  <th onClick={() => handleSort('debtPayment')}>DEBT PAYMENT{sortBy === 'debtPayment' ? '▼' : '▲'}</th>
                  <th onClick={() => handleSort('remainingDebt')}>
                    REMAINING DEBT{sortBy === 'remainingDebt' ? '▼' : '▲'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {paymentScheduleData.map((item: PaymentScheduleEntity) => (
                  <tr className="table__row" key={item.number}>
                    <td>{item.number}</td>
                    <td>{item.date}</td>
                    <td>{item.totalPayment}</td>
                    <td>{item.interestPayment}</td>
                    <td>{item.debtPayment}</td>
                    <td>{item.remainingDebt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-btns__wrapper">
            <Button text="Deny" onClick={openModal} className="btn btn_red btn_small" />
            <div>
              <label className="table__ckeckbox">
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />I agree with the payment
                schedule
              </label>
              <Button text="Send" disabled={!isChecked} type="submit" className="btn btn_blue btn_small" />
            </div>
          </div>
        </form>
      )}
      <ModalPopup isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
