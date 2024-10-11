/** @jsxImportSource @emotion/react */
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { inputSearchCss } from './InputSearch.style';
interface inputSearchProps {
  setName: (e: string) => void;
}

export const InputSearch = ({ setName }: inputSearchProps) => {
  const debounced = useDebouncedCallback((value) => {
    setName(value);
  }, 1000);
  return (
    <div css={inputSearchCss.searchContainer}>
      <div css={inputSearchCss.search}>
        <input
          css={inputSearchCss.textInput}
          type="text"
          placeholder="Search by Name, Region, Subregion"
          onChange={(e) => debounced(e.target.value)}
        />
        <img css={inputSearchCss.logo} src={'/images/Search.svg'} alt="logo" />
      </div>
    </div>
  );
};
