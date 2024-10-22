/** @jsxImportSource @emotion/react */
import React from 'react';

import { tabStyle } from './Tab.style';

import { Tap } from '@/app/type/Type';

interface TabProps {
  tabs: Tap[];
  activeTab: string[];
}

export const Tab = ({ tabs, activeTab }: TabProps) => {
  return (
    <div css={tabStyle.tabs}>
      <ul css={tabStyle.tabList}>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={tab.onClick}
              css={[
                tabStyle.tab,
                activeTab.includes(tab.id) && tabStyle.active,
              ]}
              data-testid="item-tab"
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
