export type OffersDataProps = {
  cardLogo?: string;
  cardLogoAlt?: string;
  applicationId: number;
  requestedAmount: number;
  totalAmount: number;
  term: number;
  monthlyPayment: number;
  rate: number;
  isInsuranceEnabled: boolean;
  isSalaryClient: boolean;
  onSubmitHandler?: (value: boolean) => void;
};
