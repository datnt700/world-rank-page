import { css } from '@emotion/react';

import { colors } from '@/app/styles/Global.style';
export const mainContentStyle = {
  container: css({
    position: 'relative',
    top: '-2rem',
    '@media screen and (min-width: 1024px)': {
      margin: '0 2rem',
    },
  }),
  wrapper: css({
    border: '1px solid #282B30',
    backgroundColor: colors.dark,
    padding: '1.6rem 2rem',
    borderRadius: '0.75rem',
  }),
  search: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: {
      color: colors.grayLight,
      fontSize: '1rem',
    },
  }),
};
