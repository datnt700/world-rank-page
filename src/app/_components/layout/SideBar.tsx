/** @jsxImportSource @emotion/react */
import React from 'react';

import { DropList } from '../common/DropList';

import { sideBarStyle } from '@/app/_components/layout/SideBar.style';
import { Tab } from '@/app/_components/common/Tab';
import { Checkbox } from '@/app/_components/common/Checkbox';

interface SideBarProps {
  activeTab: string[];
  setActiveTab: (e: string[]) => void;
  setStatus: (e: { id: number; name: string; status: boolean }[]) => void;
  status: { id: number; name: string; status: boolean }[];
  activeList: boolean;
  setActiveList: (e: boolean | ((prev: boolean) => boolean)) => void;
  option: string;
  handleClicked: (e: string) => void;
}

export const SideBar = ({
  activeTab,
  setActiveTab,
  status,
  setStatus,
  activeList,
  setActiveList,
  option,
  handleClicked,
}: SideBarProps) => {
  const listOption = [
    {
      id: '1',
      option: 'Population',
    },
    {
      id: '2',
      option: 'Area (km²)',
    },
    {
      id: '3',
      option: 'Name',
    },
  ];

  const tabs = [
    {
      label: 'Americas',
      id: 'Americas',
      onClick: () => handleTabClick('Americas'),
    },
    {
      label: 'Antarctic',
      id: 'Antarctic',
      onClick: () => handleTabClick('Antarctic'),
    },
    {
      label: 'Africa',
      id: 'Africa',
      onClick: () => handleTabClick('Africa'),
    },
    {
      label: 'Asia',
      id: 'Asia',
      onClick: () => handleTabClick('Asia'),
    },
    {
      label: 'Europe',
      id: 'Europe',
      onClick: () => handleTabClick('Europe'),
    },
    {
      label: 'Oceania',
      id: 'Oceania',
      onClick: () => handleTabClick('Oceania'),
    },
  ];

  const handleTabClick = (tapId: string) => {
    if (activeTab.includes(tapId)) {
      const filters = activeTab.filter((el) => el !== tapId);
      setActiveTab(filters);
    } else {
      setActiveTab([...activeTab, tapId]);
    }
  };

  const handleOpenList = () => {
    setActiveList((e) => !e);
  };

  const onChange = (e: string) => {
    setStatus(
      status.map((item) =>
        item.name === e
          ? { ...item, status: !item.status }
          : { ...item, status: false }
      )
    );
  };

  return (
    <section id={'SideBar'}>
      <div css={sideBarStyle.container}>
        <div css={sideBarStyle.content}>
          <p>Sort by</p>
          <DropList
            handleOpenList={handleOpenList}
            handleClicked={handleClicked}
            activeList={activeList}
            listOption={listOption}
            option={option}
          />
        </div>
        <div css={sideBarStyle.content}>
          <p>Region</p>
          <Tab tabs={tabs} activeTab={activeTab} />
        </div>
        <div css={sideBarStyle.content}>
          <p>Status</p>
          {status.map((item) => (
            <Checkbox
              key={item.id}
              label={item.name}
              isChecked={item.status}
              onChange={onChange}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
