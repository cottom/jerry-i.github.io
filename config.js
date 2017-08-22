module.exports = {
  PAGE_SIZE: 5,
  ICONFONT: '//at.alicdn.com/t/font_ki2p4b8k45kx1or.css',
  NAVS: [{
    name: 'article',
    icon: '',
    path: ''
  }],
  PRIMARY_COLOR: '#2d95f7;',
  NAV_TABS: [{
      name: 'Index',
      icon: 'cottom-icon-home',
      path: '/',
      activePath: /\/(blog|page)*(\/\d+)*$/
    },
    // {
    //   name: 'Tags',
    //   icon: 'cottom-icon-label_fill',
    //   path: '/tag',
    //   activePath: /\/tag/
    // },
    {
      name: 'Archives',
      icon: 'cottom-icon-sort',
      path: '/archives',
      activePath: /\archives/
    },
    {
      name: 'About',
      icon: 'cottom-icon-timerauto',
      path: '/about',
      activePath: /\about/
    }
  ],
  PAGE_SIZE: 7
}
