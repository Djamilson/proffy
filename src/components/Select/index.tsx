import React, { InputHTMLAttributes } from 'react';

import { SelectBlock } from './styles';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <SelectBlock>
      <label htmlFor={name}>{label}</label>
      <select defaultValue="" id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </SelectBlock>
  );
};

export default Select;
