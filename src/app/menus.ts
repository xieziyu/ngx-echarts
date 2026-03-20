export interface AppMenu {
  path: string;
  text: string;
  icon?: string;
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
    icon: 'grid_view',
    text: 'Getting Started',
  },
  {
    path: '/advanced',
    icon: 'device_hub',
    text: 'Advanced',
  },
  {
    path: '/series',
    icon: 'bar_chart',
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
      {
        path: '/series/heatmap',
        text: 'Heatmap',
      },
    ],
  },
];
