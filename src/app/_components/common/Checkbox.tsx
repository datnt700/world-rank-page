/** @jsxImportSource @emotion/react */
import React from 'react';

import { checkboxStyle } from './Checkbox.style';

interface CheckBoxProps {
  name: string;
  activeCheckbox: boolean;
  handleChecked: (e: string) => void;
}

export const Checkbox = ({
  name,
  activeCheckbox,
  handleChecked,
}: CheckBoxProps) => {
  return (
    <label css={checkboxStyle.container}>
      {name}
      <input
        type="checkbox"
        checked={activeCheckbox}
        onChange={() => handleChecked(name)}
      />
      <span css={checkboxStyle.checkmark} className="checkmark"></span>
    </label>
  );
};
