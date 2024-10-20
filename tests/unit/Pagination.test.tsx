import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

import { Pagination } from '../../src/app/_components/common/Pagination';

describe('should call handlePagination when the pagination is clicked', () => {
  it('should call handlePagination with the correct page number when the pagination is clicked ', () => {
    const mockHandlePagination = vi.fn();
    const currentPage = 1;
    render(
      <Pagination
        postsPerPage={10}
        length={250}
        currentPage={currentPage}
        handlePagination={mockHandlePagination}
      />
    );
    const paginationButtons = screen.getAllByRole('button');
    fireEvent.click(paginationButtons[1]);

    expect(mockHandlePagination).toHaveBeenCalledTimes(1);
    expect(mockHandlePagination).toHaveBeenCalledWith(2);
  });
});
