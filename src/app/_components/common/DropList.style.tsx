import { css } from '@emotion/react';

import { colors } from '../../styles/Global.style';
export const dropListStyle = {
  container: css({
    border: `1px solid ${colors.darkLight}`,
    fontSize: '0.875rem',
    color: colors.blue,
    fontWeight: 800,
    position: 'relative',
    borderRadius: '0.75rem',
    width: '100%',
  }),
  selected: css({
    border: 'none',
    backgroundColor: 'transparent',
    width: '100%',
  }),
  btn: css({
    fontSize: '0.875rem',
    color: colors.grayDark,
    padding: '0.7rem 1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.2rem',
    justifyContent: 'space-between',
    '@media (min-width: 640px)': {
      padding: '1.2rem 0 1.2rem 0.7rem',
    },
    '@media (min-width: 1280px)': {
      padding: '1.2rem 0 1.2rem 1.6rem',
    },
    '&.activeList': {
      backgroundColor: colors.grayDark,
      color: colors.white,
    },
    span: {
      fontWeight: 'bold',
    },
  }),
  menu: css({
    marginTop: '0.5rem',
    border: '1px solid #4D5562',
    borderRadius: '0.5rem',
    position: 'absolute',
    backgroundColor: colors.grayDark,
    display: 'none',
    top: '90px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    ul: {
      listStyle: 'none',

      li: {
        padding: '0.5rem',
        cursor: 'pointer',

        button: {
          border: 'none',
          backgroundColor: 'transparent',
          color: colors.white,
          cursor: 'pointer',
          width: '100%',
          padding: '0 2rem',
        },

        '&:hover': {
          backgroundColor: colors.blue,
          borderTopLeftRadius: '0.5rem',
          borderTopRightRadius: '0.5rem',
        },
      },
    },
  }),
  activeList: css({
    display: 'block',
  }),
};
