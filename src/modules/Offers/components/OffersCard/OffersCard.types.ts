export type OffersCardProps = {
  cardLogo: string;
  cardLogoAlt: string;
  cardAmount: string;
  cardTerm: string;
  cardPayment: string;
  cardRate: string;
  cardInsurance?: boolean;
  cardSalary?: boolean;
  onSubmitHandler: (value: boolean) => void;
};
