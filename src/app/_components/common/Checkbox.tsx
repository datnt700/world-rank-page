/** @jsxImportSource @emotion/react */
import React from 'react';

import { checkboxStyle } from './Checkbox.style';

interface CheckBoxProps {
  label: string;
  isChecked: boolean;
  onChange: (label: string) => void;
}

export const Checkbox = ({ label, isChecked, onChange }: CheckBoxProps) => {
  return (
    <label css={checkboxStyle.container}>
      {label}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange(label)}
      />
      <span css={checkboxStyle.checkmark} className="checkmark"></span>
    </label>
  );
};
