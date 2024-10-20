import { css } from '@emotion/react';

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
    color: '#6C727F',
    fontSize: ' 0.75rem',
    cursor: 'pointer',
  }),
  active: css({
    backgroundColor: '#6f757c',
    color: '#D2D5DA',
  }),
};
