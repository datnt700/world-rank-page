/** @jsxImportSource @emotion/react */
import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/Logo.svg';

import { introductionStyle } from './Introduction.style';
export const Introduction = () => {
  return (
    <section id={'Introduction'}>
      <div css={introductionStyle.container}>
        <Image src={logo} alt={'logo'} width={200} height={100} />
      </div>
    </section>
  );
};
