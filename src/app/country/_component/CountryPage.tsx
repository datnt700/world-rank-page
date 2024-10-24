/** @jsxImportSource @emotion/react */
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { countryPageStyle } from '@/app/country/_component/CountryPage.style';
import { useCountry } from '@/app/hooks/useCountry';
import { Country } from '@/app/type/Country';

export const CountryPage = () => {
  const [countryPage, setCountryPage] = useState<Country>();
  const searchParams = useSearchParams();
  const searchId = searchParams.get('id');
  const { data, isLoading } = useCountry();

  useEffect(() => {
    const filteredCountry = data?.find(
      (item: Country) => item.name.common === searchId
    );
    setCountryPage(filteredCountry);
  }, [data, searchId]);

  return (
    <div css={countryPageStyle.container}>
      <div css={countryPageStyle.wrapper}>
        {isLoading && <p style={{ color: 'white' }}>No data available</p>}
        {countryPage && (
          <>
            <div css={countryPageStyle.content}>
              <Image
                src={countryPage.flags.svg}
                alt={'flag-item'}
                width={250}
                height={250}
                css={countryPageStyle.image}
              />
              <h1 css={countryPageStyle.name}>{countryPage.name.common}</h1>
              <p css={countryPageStyle.subName}>{countryPage.name.official}</p>
              <div css={countryPageStyle.tags}>
                <div css={countryPageStyle.tagItem}>
                  <span css={countryPageStyle.tagName}>Population</span>
                  <div css={countryPageStyle.line}></div>
                  <span css={countryPageStyle.tagValue}>
                    {countryPage.population}
                  </span>
                </div>
                <div css={countryPageStyle.tagItem}>
                  <span css={countryPageStyle.tagName}>Area (km²)</span>
                  <div css={countryPageStyle.line}></div>
                  <span css={countryPageStyle.tagValue}>
                    {countryPage.area}
                  </span>
                </div>
              </div>
              <div css={countryPageStyle.listInfo}>
                <div css={countryPageStyle.info}>
                  <div css={countryPageStyle.infoItem}>
                    <span css={countryPageStyle.subTitle}>Capital</span>
                    <span css={countryPageStyle.value}>
                      {countryPage.capital ? countryPage.capital[0] : ''}
                    </span>
                  </div>
                </div>
                <div css={countryPageStyle.info}>
                  <div css={countryPageStyle.infoItem}>
                    <span css={countryPageStyle.subTitle}>Subregion</span>
                    <span css={countryPageStyle.value}>
                      {countryPage.subregion}
                    </span>
                  </div>
                </div>
                <div css={countryPageStyle.info}>
                  <div css={countryPageStyle.infoItem}>
                    <span css={countryPageStyle.subTitle}>Language</span>
                    <span css={countryPageStyle.value}>
                      {Object.values(countryPage.languages).join(', ')}
                    </span>
                  </div>
                </div>
                <div css={countryPageStyle.info}>
                  <div css={countryPageStyle.infoItem}>
                    <span css={countryPageStyle.subTitle}>Currencies</span>
                    <span css={countryPageStyle.value}>
                      {countryPage.currencies &&
                        Object.values(countryPage.currencies)[0]?.name}
                    </span>
                  </div>
                </div>
                <div css={countryPageStyle.info}>
                  <div css={countryPageStyle.infoItem}>
                    <span css={countryPageStyle.subTitle}>Continents</span>
                    <span css={countryPageStyle.value}>
                      {countryPage.continents}
                    </span>
                  </div>
                </div>
                <div css={countryPageStyle.info}>
                  <div
                    css={[countryPageStyle.infoItem, countryPageStyle.neighbor]}
                  >
                    <span css={countryPageStyle.subTitle}>
                      Neighbouring Countries
                    </span>
                    <div css={countryPageStyle.imageNeighbor}>
                      {!countryPage.borders ? (
                        <p>This country has no neighbouring countries</p>
                      ) : (
                        countryPage.borders.map((item) => {
                          const borderCountry = data.find(
                            (el: Country) => el.cca3 === item
                          );
                          return (
                            borderCountry && (
                              <Image
                                src={borderCountry.flags.svg}
                                alt={'voisin'}
                                width={80}
                                height={50}
                              />
                            )
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
