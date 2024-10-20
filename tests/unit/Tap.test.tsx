import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

import { Tab } from '../../src/app/_components/common/Tab';

import { Tap } from '@/app/type/Type';

describe('Tab Component', () => {
  const tabs: Tap[] = [
    { id: '1', label: 'Tab 1', onClick: vi.fn() },
    { id: '2', label: 'Tab 2', onClick: vi.fn() },
    { id: '3', label: 'Tab 3', onClick: vi.fn() },
  ];
  it('renders the correct number of tabs', () => {
    render(<Tab tabs={tabs} tapChecked={[]} />);

    const tabButtons = screen.getAllByTestId('item-tab');
    expect(tabButtons).toHaveLength(tabs.length);
  });

  it('calls onClick when a tab is clicked', () => {
    render(<Tab tabs={tabs} tapChecked={[]} />);

    const firstTab = screen.getByText('Tab 1');
    fireEvent.click(firstTab);

    expect(tabs[0].onClick).toHaveBeenCalled();
  });
});
