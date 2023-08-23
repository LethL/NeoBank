export type Option = { title: string; value: string };

export interface SelectFieldProps {
  options?: Option[];
  selected?: Option;
  label: string;
  containerClassName?: string;
  value?: string | number;
  onChange?: (selected: Option['value']) => void;
  errorText?: string;
  selectClassName?: string;
  labelClassName?: string;
}
