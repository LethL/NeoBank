import React from 'react';
import { Navigate } from 'react-router-dom';
import Table from 'modules/Document/components/Table/Table';

export default function DocumentPage() {
  const creditStep = localStorage.getItem('status');
  return creditStep === 'step_scoring' ? <Table /> : <Navigate to={'/404'} />;
}
