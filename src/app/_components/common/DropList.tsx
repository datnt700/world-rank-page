/** @jsxImportSource @emotion/react */
import { Icon } from '@iconify/react';
import React from 'react';

import { dropListStyle } from './DropList.style';

import { OptionList } from '@/app/type/Type';

interface DropListProps {
  handleOpenList: () => void;
  handleClicked: (e: string) => void;
  activeList: boolean;
  listOption: OptionList[];
  option: string;
}

export const DropList = ({
  handleOpenList,
  handleClicked,
  activeList,
  listOption,
  option,
}: DropListProps) => {
  return (
    <div css={dropListStyle.container}>
      <button css={dropListStyle.selected} onClick={handleOpenList}>
        <span css={dropListStyle.btn}>
          <span>{option}</span>
          {activeList ? (
            <Icon
              icon="ri:arrow-down-s-line"
              style={{ paddingRight: '0.5rem', width: '3rem', height: '1rem' }}
            />
          ) : (
            <Icon
              icon="solar:alt-arrow-up-linear"
              style={{ paddingRight: '0.5rem', width: '3rem', height: '1rem' }}
            />
          )}
        </span>
      </button>
      {activeList && (
        <div css={[dropListStyle.menu, activeList && dropListStyle.activeList]}>
          <ul>
            {listOption.map((option) => (
              <li key={option.id}>
                <button
                  onClick={() => handleClicked(option.option)}
                  data-testid="item-list"
                >
                  {option.option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
