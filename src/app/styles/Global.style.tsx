'use client';

/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        font-family: 'Be Vietnam Pro', sans-serif;
        font-style: normal;
        background-color: #1b1d1f;
      }
    `}
  />
);

export const colors = {
  gray: '#6C727F',
  grayLight: '#D2D5DA',
  darkLight: '#282B30',
  dark: '#1B1D1F',
};
