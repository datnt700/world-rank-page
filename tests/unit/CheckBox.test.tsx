import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

import { Checkbox } from '../../src/app/_components/common/Checkbox';

describe('Checkbox Component', () => {
  it('should call handleChecked with the correct name when the checkbox is clicked', () => {
    const mockHandleChecked = vi.fn();
    const mockName = 'Independent';
    render(
      <Checkbox
        label={'Independent'}
        isChecked={false}
        onChange={mockHandleChecked}
      />
    );

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(mockHandleChecked).toHaveBeenCalledTimes(1);
    expect(mockHandleChecked).toHaveBeenCalledWith(mockName);
  });
});
