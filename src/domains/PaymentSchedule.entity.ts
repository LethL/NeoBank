export interface PaymentScheduleEntity {
  date: string;
  debtPayment: number;
  interestPayment: number;
  number: number;
  remainingDebt: number;
  totalPayment: number;
}
