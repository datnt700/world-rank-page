export interface Name {
  common: string;
  official: string;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Country {
  name: Name;
  region: string;
  independent: boolean;
  unMember: boolean;
  flags: { png: string; svg: string };
  population: number;
  area: number;
  capital: string;
  subregion: string;
  languages: { [key: string]: string };
  currencies: { [key: string]: Currency };
  continents: string;
  borders: [];
  cca3: string;
}
