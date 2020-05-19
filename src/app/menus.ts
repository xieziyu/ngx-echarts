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
  {
    path: '/series',
    icon: 'bar-chart',
    text: 'Series',
    submenus: [
      {
        path: '/series/graph',
        text: 'Graph',
      },
      {
        path: '/series/tree',
        text: 'Tree',
      },
    ],
  },
  {
    path: '/gl',
    icon: 'heat-map',
    text: 'GL',
    submenus: [
      {
        path: '/gl/bar3d',
        text: '3D Bar',
      },
    ],
  },
];
