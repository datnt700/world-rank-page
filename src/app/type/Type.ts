export interface Tap {
  label: string;
  id: string;
  onClick: () => void;
}

export interface OptionList {
  id: string;
  option: string;
}
