/** @jsxImportSource @emotion/react */
import React from 'react';

import { checkboxStyle } from './Checkbox.style';

interface CheckBoxProps {
  label: string;
  isChecked: boolean;
  handleChecked: (label: string) => void;
}

export const Checkbox = ({
  label,
  isChecked,
  handleChecked,
}: CheckBoxProps) => {
  return (
    <label css={checkboxStyle.container}>
      {label}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => handleChecked(label)}
      />
      <span css={checkboxStyle.checkmark} className="checkmark"></span>
    </label>
  );
};
