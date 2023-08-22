import React, { ChangeEventHandler } from 'react';
import { TextFieldProps } from './TextField.types';
import './TextField.css';

export function TextField({
  label,
  placeholder,
  containerClassName = '',
  inputType,
  value,
  onChange,
  errorText,
  inputClassName,
  labelClassName,
}: TextFieldProps) {
  const onInputChangeValue: ChangeEventHandler<HTMLInputElement> = (evt) => onChange(evt.target.value);
  return (
    <div className={containerClassName}>
      <label htmlFor={label} className={labelClassName}>
        {label}
      </label>
      <input
        type={inputType}
        className={inputClassName}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onInputChangeValue}
      />
      {errorText && <div className="invalid-text">{errorText}</div>}
    </div>
  );
}
