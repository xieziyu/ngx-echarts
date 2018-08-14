export const navigation = [
  {
    name: 'Home',
    url: '/home',
    icon: 'fa fa-home',
  },
  {
    name: 'Change Logs',
    url: '/changelogs',
    icon: 'fa fa-file-text-o',
  },
  {
    title: true,
    name: 'Getting Started'
  },
  {
    name: 'Usage',
    url: '/usage',
    icon: 'fa fa-html5',
    children: [
      {
        name: 'Basic',
        url: '/usage/basic',
        icon: 'fa fa-bar-chart'
      },
      {
        name: 'echartsInstance',
        url: '/usage/echarts-instance',
        icon: 'fa fa-code'
      },
      {
        name: 'Events',
        url: '/usage/events',
        icon: 'fa fa-comment',
        badge: {
          variant: 'success',
          text: 'new'
        }
      },
      {
        name: 'Theme',
        url: '/usage/theme',
        icon: 'fa fa-eyedropper',
        badge: {
          variant: 'success',
          text: 'new'
        }
      },
      {
        name: 'Loading',
        url: '/usage/loading',
        icon: 'fa fa-spinner'
      },
      {
        name: 'Update Chart',
        url: '/usage/update-chart',
        icon: 'fa fa-line-chart'
      },
      {
        name: 'InitOpts',
        url: '/usage/init-opts',
        icon: 'fa fa-cog'
      },
      {
        name: 'Auto Resize',
        url: '/usage/auto-resize',
        icon: 'fa fa-cogs',
        badge: {
          variant: 'success',
          text: 'new'
        }
      },
    ]
  },
  {
    title: true,
    name: 'Advanced Demo'
  },
  {
    name: 'Map',
    url: '/demo/map',
    icon: 'fa fa-map',
    children: [
      {
        name: 'Population Density',
        url: '/demo/map/hongkong-pd',
        icon: 'fa fa-star'
      },
    ]
  },
  {
    name: 'Tree',
    url: '/demo/tree',
    icon: 'fa fa-sitemap',
    children: [
      {
        name: 'Official Demo',
        url: '/demo/tree/official-demo',
        icon: 'fa fa-star'
      }
    ]
  },
  {
    name: 'Graph',
    url: '/demo/graph',
    icon: 'fa fa-share-alt',
    children: [
      {
        name: 'Simple Graph',
        url: '/demo/graph/simple',
        icon: 'fa fa-star'
      },
      {
        name: 'Force Layout',
        url: '/demo/graph/force-layout',
        icon: 'fa fa-star'
      }
    ]
  }
];
