import { css } from '@emotion/react';

import { colors } from '../../styles/Global.style';
export const tabStyle = {
  tabs: css({
    width: '100%',
  }),
  tabList: css({
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    listStyle: 'none',
    flexWrap: 'wrap',
    '@media screen and (min-width: 640px)': {
      justifyContent: 'space-between',
    },
  }),
  tab: css({
    padding: '0.5rem 0.7rem',
    border: 'none',
    borderRadius: '0.6rem',
    outline: 'none',
    backgroundColor: 'transparent',
    color: colors.gray,
    fontSize: ' 0.75rem',
    cursor: 'pointer',
  }),
  active: css({
    backgroundColor: '#6f757c',
    color: colors.grayLight,
  }),
};
