import React from "react";
import Loan from "../../components/Loan/Loan";
import Tabs from "../../components/Tabs/Tabs";
import Divider from "../../components/Divider/Divider";

export default function LoanPage() {
  return (
    <main>
      <Loan />
      <Tabs />
      <Divider />
    </main>
  );
}
