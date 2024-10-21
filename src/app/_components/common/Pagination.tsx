/** @jsxImportSource @emotion/react */
import React from 'react';

import { paginationStyle } from './Pagination.style';

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  handleChange: (e: number) => void;
}

export const Pagination = ({
  itemsPerPage,
  totalItems,
  handleChange,
  currentPage,
}: PaginationProps) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    paginationNumbers.push(i);
  }
  return (
    <div css={paginationStyle.pagination}>
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          css={[
            paginationStyle.pageNumber,
            currentPage === pageNumber ? paginationStyle.active : '',
          ]}
          onClick={() => handleChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};
