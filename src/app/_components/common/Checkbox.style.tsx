import { css } from '@emotion/react';

export const checkboxStyle = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    paddingLeft: '35px',
    marginBottom: '12px',
    cursor: 'pointer',
    fontSize: ' 1rem',
    userSelect: 'none',
    color: '#D2D5DA',

    input: {
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
      height: 0,
      width: 0,

      '&:checked ~ .checkmark': {
        backgroundColor: '#2196F3',
      },

      '&:checked ~ .checkmark:after': {
        display: 'block',
      },
    },

    '& .checkmark:after': {
      left: '8px',
      top: '0px',
      width: '5px',
      height: '15px',
      border: 'solid white',
      borderWidth: '0 3px 3px 0',
      transform: 'rotate(45deg)',
    },
  }),
  checkmark: css({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '25px',
    width: '25px',
    backgroundColor: 'transparent',
    borderRadius: '0.15rem',
    border: '1px solid #6C727F',

    '&:after': {
      content: '""',
      position: 'absolute',
      display: 'none',
    },
  }),
};
