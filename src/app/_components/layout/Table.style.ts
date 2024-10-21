import { css } from '@emotion/react';

import { colors } from '@/app/styles/Global.style';

export const tableStyle = {
  container: css({
    width: '100%',
  }),
  table: css({
    borderCollapse: 'collapse',
    margin: '25px 0',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
    width: '100%',
    '@media screen and (min-width: 640px)': {
      margin: '0',
    },
    'th, td': {
      padding: '0.8rem 0.2rem',
      textAlign: 'left',
      '@media screen and (min-width: 640px)': {
        padding: '0.8rem 1rem',
      },
      '@media screen and (min-width: 1280px)': {
        padding: '0.8rem 2rem',
      },
    },

    tbody: {
      color: colors.grayLight,
    },
  }),
  header: css({
    color: colors.gray,
    textAlign: 'left',
    borderBottom: '0.5px solid #6C727F',
    fontSize: '0.75rem',
  }),
  content: css({
    fontSize: '1rem',
  }),
  flag: css({
    width: '1rem',
    height: '1rem',

    img: {
      borderRadius: '0.5rem',
    },
  }),
};
