import React from 'react';
import { SelectFieldProps } from './SelectField.types';
import './SelectField.css';

export default function SelectField({
  label,
  containerClassName = '',
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
      <select className={selectClassName} onClick={onChange} id={label}>
        {options?.map((option) => (
          <option key={option.title} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
      {errorText && <div className="invalid-text">{errorText}</div>}
    </div>
  );
}
