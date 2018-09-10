import importedComponent from 'react-imported-component';

const header = [
  {
    path: '/',
    exact: true,
    component: importedComponent(() =>
      import('~/pages/Layout/Header/AccountNavbar')
    )
  },
  {
    path: '/account',
    component: importedComponent(() =>
      import('~/pages/Layout/Header/AccountNavbar')
    )
  },
  {
    path: '/transaction',
    component: importedComponent(() =>
      import('~/pages/Layout/Header/TransactionNavbar')
    )
  },
  {
    path: '/key',
    component: importedComponent(() =>
      import('~/pages/Layout/Header/KeyNavbar')
    )
  },
  {
    path: '/setting',
    component: importedComponent(() =>
      import('~/pages/Layout/Header/SettingNavbar')
    )
  }
];

const main = [
  {
    path: '/',
    exact: true,
    component: importedComponent(() => import('~/pages/Home'))
  },
  {
    path: '/signup',
    exact: true,
    component: importedComponent(() => import('~/pages/SignUp'))
  },
  {
    path: '/signin',
    exact: true,
    component: importedComponent(() => import('~/pages/SignIn'))
  },
  {
    path: '/account',
    exact: true,
    component: importedComponent(() => import('~/pages/Account'))
  },
  {
    path: '/account',
    component: importedComponent(() => import('~/pages/Account/Detail'))
  },
  {
    path: '/setting',
    exact: true,
    component: importedComponent(() => import('~/pages/Setting'))
  }
];

export { header, main };
