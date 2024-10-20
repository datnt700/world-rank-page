import { css } from '@emotion/react';

export const paginationStyle = {
  pagination: css({
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem 0',
    flexWrap: 'wrap',
    button: {
      padding: '10px',
    },
  }),
  pageNumber: css({}),
  active: css({
    background: 'black',
    color: '#fff',
    border: '1px solid #fff',
  }),
};
