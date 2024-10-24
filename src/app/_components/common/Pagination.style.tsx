import { css } from '@emotion/react';

import { colors } from '../../styles/Global.style';

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
  pageNumber: css({
    backgroundColor: 'transparent',
    color: colors.white,
    border: 'none',
  }),
  active: css({
    backgroundColor: '#6f757c',
    color: colors.grayLight,
    outline: 'none',
  }),
};
