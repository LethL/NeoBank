import React from 'react';
import LoanInto from '../../components/LoanIntro/Loan';
import Tabs from '../../components/Tabs/Tabs';
import Divider from '../../components/Divider/Divider';
import Loan from 'modules/Loan/Loan.module';

export default function LoanPage() {
  return (
    <main>
      <LoanInto />
      <Tabs />
      <Divider />
      <Loan />
    </main>
  );
}
