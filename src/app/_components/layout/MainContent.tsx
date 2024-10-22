/** @jsxImportSource @emotion/react */
import { useEffect, useMemo, useState } from 'react';

import { InputSearch } from '@/app/_components/common/InputSearch';
import { mainContentStyle } from '@/app/_components/layout/MainContent.style';
import { useCountry } from '@/app/hooks/useCountry';
import { Country } from '@/app/type/Country';
import { SideBar } from '@/app/_components/layout/SideBar';
import { Table } from '@/app/_components/layout/Table';
import { Pagination } from '@/app/_components/common/Pagination';

export const MainContent = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState<Country[]>([]);
  const [activeTab, setActiveTab] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [activeList, setActiveList] = useState(false);
  const [option, setOption] = useState('Population');

  const { data, isLoading } = useCountry();
  const [status, setStatus] = useState([
    { id: 0, name: 'Member of the United Nations', status: false },
    { id: 1, name: 'Independent', status: false },
  ]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * postsPerPage;
    const lastPageIndex = firstPageIndex + postsPerPage;
    return country.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, country, postsPerPage]);

  const handleSort = (op: string) => {
    setOption(op);
    setActiveList(false);
  };

  const sortData = (data: Country[], op: string) => {
    const sortedData = [...data];

    if (op === 'Population') {
      sortedData.sort((a, b) => a.population - b.population);
    } else if (op === 'Area (km²)') {
      sortedData.sort((a, b) => a.area - b.area);
    } else {
      sortedData.sort((a, b) => a.name.common.localeCompare(b.name.common));
    }
    return sortedData;
  };

  const filterByName = (data: Country[], name: string) => {
    if (!name) return data;
    return data.filter((item: Country) => item.name.common.includes(name));
  };

  const filterByRegion = (data: Country[], regions: string[]) => {
    if (regions.length === 0) return data;
    return data.filter((item: Country) => regions.includes(item.region));
  };

  const filterByStatus = (
    data: Country[],
    status: { id: number; name: string; status: boolean }[]
  ) => {
    const activeStatus = status.filter((el) => el.status);
    if (activeStatus.length === 0) return data;

    return data.filter((item: Country) => {
      return activeStatus.some((el) => {
        if (el.name === 'Independent') return item.independent;
        if (el.name === 'Member of the United Nations') return item.unMember;
        return false;
      });
    });
  };

  const applyFilters = () => {
    let filteredData = data || [];
    filteredData = filterByName(filteredData, name);
    filteredData = filterByRegion(filteredData, activeTab);
    filteredData = filterByStatus(filteredData, status);
    filteredData = sortData(filteredData, option);
    setCountry(filteredData);
  };

  useEffect(() => {
    if (data) {
      applyFilters();
    }
  }, [data, name, activeTab, status, option]);
  const handleChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section id={'MainContent'}>
      <div css={mainContentStyle.container}>
        <div css={mainContentStyle.wrapper}>
          <div css={mainContentStyle.sideBar}>
            <div css={mainContentStyle.search}>
              <p>Found {country.length} countries</p>
              <InputSearch setName={setName} />
            </div>
            <SideBar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              status={status}
              activeList={activeList}
              setStatus={setStatus}
              setActiveList={setActiveList}
              option={option}
              handleClicked={handleSort}
            />
          </div>
          <div>
            {!isLoading && country.length > 0 ? (
              <Table data={currentTableData} />
            ) : (
              <p style={{ color: 'white' }}>No data available</p>
            )}
            <Pagination
              itemsPerPage={postsPerPage}
              totalItems={country.length}
              handleChange={handleChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
