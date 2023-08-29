import React from 'react';
import Loan from '../../components/Loan/Loan';
import Tabs from '../../components/Tabs/Tabs';
import Divider from '../../components/Divider/Divider';
import LoanForm from '../../modules/LoanForm/LoanForm.module';
import Offers from 'modules/Offers/Offers.module';

export default function LoanPage() {
  return (
    <main>
      <Loan />
      <Tabs />
      <Divider />
      {/* <LoanForm /> */}
      <Offers />
    </main>
  );
}
