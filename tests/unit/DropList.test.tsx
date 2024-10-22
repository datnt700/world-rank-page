import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

import { DropList } from '../../src/app/_components/common/DropList';

describe('DropList Component', () => {
  const mockHandleOpenList = vi.fn();
  const mockHandleClicked = vi.fn();
  const listOption = [
    {
      id: '1',
      option: 'Population',
    },
    {
      id: '2',
      option: 'Area (km²)',
    },
    {
      id: '3',
      option: 'Name',
    },
  ];
  const mockActiveList = false;
  const mockOption = 'Population';

  it('should render default state', () => {
    render(
      <DropList
        handleOpenList={mockHandleOpenList}
        handleClicked={mockHandleClicked}
        activeList={mockActiveList}
        listOption={listOption}
        option={mockOption}
      />
    );

    const dropdownText = screen.getByText(/Population/i);
    expect(dropdownText).toBeInTheDocument();
  });

  it('should render list after drop list is clicked', () => {
    const { rerender } = render(
      <DropList
        handleOpenList={mockHandleOpenList}
        handleClicked={mockHandleClicked}
        activeList={mockActiveList}
        listOption={listOption}
        option={'Population'}
      />
    );

    const dropListButton = screen.getByRole('button');
    fireEvent.click(dropListButton);

    rerender(
      <DropList
        handleOpenList={mockHandleOpenList}
        handleClicked={mockHandleClicked}
        activeList={true}
        listOption={listOption}
        option={'Population'}
      />
    );
    const option1 = screen.getAllByText(/Population/i);
    const option2 = screen.getByText(/Area/i);
    const option3 = screen.getByText(/Name/i);
    expect(option1[1]).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  it('should call handle list on click', () => {
    render(
      <DropList
        handleOpenList={mockHandleOpenList}
        handleClicked={mockHandleClicked}
        activeList={true}
        listOption={listOption}
        option={'Name'}
      />
    );

    const dropItem = screen.getAllByTestId('item-list');
    fireEvent.click(dropItem[0]);

    expect(mockHandleClicked).toHaveBeenCalledTimes(1);
  });
});
