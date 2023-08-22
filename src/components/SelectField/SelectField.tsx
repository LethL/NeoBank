import React from 'react';
import { SelectFieldProps } from './SelectField.types';

export default function SelectField({
  label,
  containerClassName = '',
  value,
  onChange,
  errorText,
  selectClassName,
  labelClassName,
  options,
}: SelectFieldProps) {
  return (
    <div className={containerClassName}>
      <label htmlFor={label} className={labelClassName}>
        {label}
      </label>
      <select className={selectClassName}>
        {options?.map((option) => (
          <option key={option.title} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
