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
    padding: '1.6rem 0.5rem',
    borderRadius: '0.75rem',
    display: 'grid',
    maxWidth: '1600px',
    margin: '0 auto',
    gridTemplateColumns: 'repeat(1,1fr)',
    '@media screen and (min-width: 1024px)': {
      padding: '1.6rem 2rem',
      gridTemplateColumns: '1fr 2fr',
      gap: '2rem',
    },
  }),
  sideBar: css({}),
  search: css({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    '@media screen and (min-width: 1024px)': {
      flexDirection: 'column',
    },
    p: {
      color: colors.grayLight,
      fontSize: '1rem',
    },
  }),
};
