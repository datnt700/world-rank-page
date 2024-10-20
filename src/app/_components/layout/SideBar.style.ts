import { css } from '@emotion/react';

export const sideBarStyle = {
  container: css({
    marginTop: '2rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  }),
  content: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    p: {
      color: '#6C727F',
      fontSize: '0.75rem',
    },
  }),
};
