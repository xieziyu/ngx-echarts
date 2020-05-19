export interface AppMenu {
  path: string;
  text: string;
  icon?: string;
  iconTheme?: string;
  submenus?: AppMenu[];
}

export const APP_MENUS: AppMenu[] = [
  {
    path: '/welcome',
    icon: 'home',
    text: 'Home',
  },
  {
    path: '/basic',
    icon: 'appstore',
    text: 'Getting Started',
  },
  {
    path: '/advanced',
    icon: 'group',
    text: 'Advanced',
  },
];
