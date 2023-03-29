export interface INavbarProps {
  items: INavbarItem[],
}

export interface INavbarItem {
  href?: string,
  label: string,
}
