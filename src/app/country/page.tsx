'use client';
import { Suspense } from 'react';

import { GlobalStyles } from '@/app/styles/Global.style';
import { Introduction } from '@/app/_components/layout/Introduction';
import { CountryPage } from '@/app/country/_component/CountryPage';

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalStyles />
        <Introduction />
        <CountryPage />
      </Suspense>
    </>
  );
}
