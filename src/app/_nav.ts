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
    name: 'Demo'
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
        icon: 'fa fa-spinner'
      },
      {
        name: 'Update Chart',
        url: '/usage/update-chart',
        icon: 'fa fa-line-chart',
        badge: {
          variant: 'info',
          text: '2.0'
        }
      },
      {
        name: 'InitOpts',
        url: '/usage/init-opts',
        icon: 'fa fa-cog',
        badge: {
          variant: 'info',
          text: '2.0'
        }
      },
    ]
  }
];
