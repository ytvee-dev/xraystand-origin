export interface NavigationOption {
  key: string;
  label: string;
}

export interface NavigationConfig {
  [key: string]: NavigationOption[];
}

export interface IdMapping {
  [key: string]: string;
}
