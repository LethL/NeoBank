export type Option = { title: string; value: string };

export interface SelectFieldProps {
  options: Option[];
  selected?: Option | null;
  label: string;
  containerClassName?: string;
  value?: string;
  onChange?: (evt: React.MouseEvent<HTMLSelectElement, MouseEvent>) => void;
  errorText?: string;
  selectClassName?: string;
  labelClassName?: string;
}
