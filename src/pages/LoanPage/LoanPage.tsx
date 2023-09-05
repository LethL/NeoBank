import React from 'react';
import Loan from '../../components/Loan/Loan';
import Tabs from '../../components/Tabs/Tabs';
import Divider from '../../components/Divider/Divider';
import Prescoring from 'modules/Prescoring/Prescoring.module';

export default function LoanPage() {
  return (
    <main>
      <Loan />
      <Tabs />
      <Divider />
      <Prescoring />
    </main>
  );
}
