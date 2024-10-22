import { css } from '@emotion/react';

import { colors } from '../../styles/Global.style';

export const inputSearchCss = {
  searchContainer: css({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    width: '100%',
    '@media (min-width: 1024px)': {
      maxWidth: '400px',
    },
    '@media (min-width: 1280px)': {
      maxWidth: '500px',
    },
  }),
  search: css({
    width: '100%',
    position: 'relative',
  }),
  textInput: css({
    padding: '1rem 0 1rem 3.5rem',
    border: 'none',
    borderRadius: '0.75rem',
    width: '100%',
    outline: 'none',
    color: colors.gray,
    backgroundColor: colors.darkLight,
    '::placeholder': {
      color: colors.gray,
      fontSize: '0.875rem',
    },
  }),
  logo: css({
    width: '1.6rem',
    position: 'absolute',
    top: '10px',
    left: '20px',
  }),
};
