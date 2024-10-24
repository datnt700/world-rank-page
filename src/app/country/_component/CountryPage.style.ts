import { css } from '@emotion/react';

import { colors } from '@/app/styles/Global.style';

export const countryPageStyle = {
  container: css({
    position: 'relative',
  }),
  wrapper: css({
    border: `1px solid ${colors.darkLight}`,
    backgroundColor: colors.dark,
    padding: '1.6rem 0.5rem',
    borderRadius: '0.75rem',
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    top: '-2rem',
  }),
  content: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    top: '-4rem',
  }),
  image: css({
    borderRadius: '0.5rem',
    height: '100%',
  }),
  name: css({
    marginTop: '2rem',
    color: colors.grayLight,
    fontSize: '2rem',
  }),
  subName: css({
    marginTop: '0.5rem',
    color: colors.grayLight,
  }),
  tags: css({
    display: 'flex',
    color: colors.grayLight,
    gap: '0.5rem',
    marginTop: '2.6rem',
  }),
  tagItem: css({
    padding: '0.5rem 1.5rem',
    backgroundColor: colors.darkLight,
    borderRadius: '0.75rem',
    fontSize: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    height: '3rem',
    flexWrap: 'wrap',
    '@media and (min-width: 640px)': {
      fontSize: '1rem',
    },
  }),
  tagName: css({
    paddingRight: '0.5rem',
  }),
  line: css({
    borderRight: `1px solid ${colors.dark}`,
    height: '100%',
  }),
  tagValue: css({
    paddingLeft: '0.5rem',
  }),
  listInfo: css({
    marginTop: '2.6rem',
    width: '100%',
  }),
  info: css({
    borderBottom: `1px solid ${colors.darkLight}`,
  }),
  infoItem: css({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.2rem 0.5rem',
  }),
  neighbor: css({
    flexDirection: 'column',
  }),
  subTitle: css({
    color: colors.gray,
  }),
  imageNeighbor: css({
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '1rem',
    alignItems: 'center',
    img: {
      borderRadius: '0.5rem',
    },
  }),
  value: css({
    color: colors.grayLight,
  }),
};
