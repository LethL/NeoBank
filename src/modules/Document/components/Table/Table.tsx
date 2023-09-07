import React, { useEffect, useState } from 'react';
import './Table.css';
import { FormStore } from 'modules/LoanForm/store/Form.store';
import { PaymentScheduleEntity } from 'domains/PaymentSchedule.entity';
import ModalPopup from 'components/Modal/Modal';
import Button from 'components/Button/Button';

export default function Table() {
  const [isChecked, setIsChecked] = useState(false);
  const [sended, setSended] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const { handleLoadDocument, handleSendPaymentSchedule } = FormStore;

  useEffect(() => {
    handleLoadDocument();
  }, []);

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSendPaymentSchedule();
    setSended(true);
  };

  const storedData = localStorage.getItem('Document');
  const jsonData = storedData ? JSON.parse(storedData) : null;
  const paymentSchedule = jsonData.credit.paymentSchedule;

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
      {sended ? (
        <div>
          <h2>Documents are formed</h2>
          <p>Documents for signing will be sent to your email</p>
        </div>
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
          <table className="table">
            <thead>
              <tr className="table__title">
                <th onClick={() => handleSort('number')}>NUMBER{sortBy === 'number' ? '▼' : '▲'}</th>
                <th onClick={() => handleSort('date')}>DATE{sortBy === 'date' ? '▼' : '▲'}</th>
                <th onClick={() => handleSort('totalPayment')}>TOTAL PAYMENT{sortBy === 'totalPayment' ? '▼' : '▲'}</th>
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
