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
        icon: 'fa fa-comment'
      },
      {
        name: 'Theme',
        url: '/usage/theme',
        icon: 'fa fa-eyedropper'
      },
      {
        name: 'Loading',
        url: '/usage/loading',
        icon: 'fa fa-spinner',
        badge: {
          variant: 'success',
          text: 'new'
        }
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
        name: 'NgxEchartsService',
        url: '/usage/NgxEchartsService',
        icon: 'fa fa-cogs'
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
      {
        name: 'Bus Lines of Beijing',
        url: '/demo/map/bus-lines-of-beijing',
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
  }
];
