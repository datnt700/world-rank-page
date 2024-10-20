/** @jsxImportSource @emotion/react */
import React from 'react';

import { paginationStyle } from './Pagination.style';

interface PaginationProps {
  postsPerPage: number;
  length: number;
  currentPage: number;
  handlePagination: (e: number) => void;
}

export const Pagination = ({
  postsPerPage,
  length,
  handlePagination,
  currentPage,
}: PaginationProps) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
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
          onClick={() => handlePagination(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};
