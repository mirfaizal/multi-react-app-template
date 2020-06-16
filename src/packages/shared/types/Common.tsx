export interface INavMenu {
  description: string;
  url: string;
  label: string;
  level: number;
  uniqueId: number;
}
export interface INavBarProps {
  navMenu: INavMenu[];
}
