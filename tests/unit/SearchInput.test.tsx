import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

import { InputSearch } from '../../src/app/_components/common/InputSearch';

vi.mock('use-debounce', () => ({
  useDebouncedCallback: vi.fn((callback) => callback),
}));

describe('Input Search Component', () => {
  it('should render input and logo', () => {
    const mockHandleInput = vi.fn();
    render(<InputSearch setName={mockHandleInput} />);

    const input = screen.getByPlaceholderText(
      'Search by Name, Region, Subregion'
    );
    expect(input).toBeInTheDocument();

    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  it('should call handleInput on input change', async () => {
    const mockSetName = vi.fn();
    render(<InputSearch setName={mockSetName} />);

    const input = screen.getByPlaceholderText(
      'Search by Name, Region, Subregion'
    );
    fireEvent.change(input, { target: { value: 'China' } });

    await waitFor(() => {
      expect(mockSetName).toHaveBeenCalledTimes(1);
      expect(mockSetName).toHaveBeenCalledWith('China');
    });
  });
});
