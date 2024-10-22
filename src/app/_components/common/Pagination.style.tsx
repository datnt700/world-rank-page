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
  pageNumber: css({}),
  active: css({
    background: 'black',
    color: colors.white,
    border: '1px solid #fff',
  }),
};
