import React from 'react';
import SideBar from '../../../components/organisms/SideBar';
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';

export default function DetailTransaction() {
  return (
    <section className="transactions-detail overflow-auto">
      <SideBar menuActive='transactions' />
      <TransactionDetailContent />
    </section>
  );
}
