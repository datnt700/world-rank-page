import { it, describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { Introduction } from '../../src/app/_components/layout/Introduction';

describe('Introduction Component', () => {
  it('should render image', () => {
    render(<Introduction />);

    const image = screen.getByAltText('logo');
    expect(image).toBeInTheDocument();
  });
});
