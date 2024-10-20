/** @jsxImportSource @emotion/react */
import { tableStyle } from '@/app/_components/layout/Table.style';
import { Country } from '@/app/type/Country';
import Image from 'next/image';

interface TableProps {
  data: Country[];
}

export const Table = ({ data }: TableProps) => {
  console.log('Table', data);
  return (
    <div css={tableStyle.container}>
      <table css={tableStyle.table}>
        <thead>
          <tr css={tableStyle.header}>
            <th>Flag</th>
            <th>Name</th>
            <th>Population</th>
            <th>Area (km²)</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody css={tableStyle.content}>
          {data?.map((item) => (
            <tr key={item.name.common}>
              <td css={tableStyle.flag}>
                <Image
                  src={item.flags.svg}
                  alt={'flag'}
                  width={50}
                  height={40}
                />{' '}
              </td>
              <td>{item.name.common}</td>
              <td>{item.population}</td>
              <td>{item.area}</td>
              <td>{item.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
