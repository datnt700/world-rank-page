/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';

import { InputSearch } from '@/app/_components/common/InputSearch';
import { mainContentStyle } from '@/app/_components/layout/MainContent.style';
import { useCountry } from '@/app/hooks/useCountry';
import { Country } from '@/app/type/Country';

export const MainContent = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState<Country[]>([]);
  const { data, isLoading } = useCountry();
  useEffect(() => {
    setCountry(data);
  }, [data]);

  useEffect(() => {
    if (name) {
      const filterArray = country.filter((item) => {
        return item.name.common == name;
      });
      setCountry(filterArray);
    }
  }, [country, name]);

  return (
    <section id={'MainContent'}>
      <div css={mainContentStyle.container}>
        <div css={mainContentStyle.wrapper}>
          <div css={mainContentStyle.search}>
            <p>Found 234 countries</p>
            <InputSearch setName={setName} />
          </div>
          {isLoading && <p style={{ color: 'white' }}>...Is Loading</p>}
        </div>
      </div>
    </section>
  );
};
