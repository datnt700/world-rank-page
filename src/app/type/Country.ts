export interface Name {
  common: string;
  official: string;
}

export interface Country {
  name: Name;
  region: string;
  independent: boolean;
  unMember: boolean;
  flags: { png: string; svg: string };
  population: number;
  area: number;
}
