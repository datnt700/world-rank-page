import { css } from '@emotion/react';

import { colors } from '@/app/styles/Global.style';

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
      color: colors.gray,
      fontSize: '0.75rem',
    },
  }),
};
