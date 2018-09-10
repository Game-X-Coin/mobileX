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
    exact: true,
    component: importedComponent(() =>
      import('~/pages/Layout/Header/AccountNavbar')
    )
  },
  {
    path: '/transaction',
    exact: true,
    component: importedComponent(() =>
      import('~/pages/Layout/Header/TransactionNavbar')
    )
  },
  {
    path: '/key',
    exact: true,
    component: importedComponent(() =>
      import('~/pages/Layout/Header/KeyNavbar')
    )
  },
  {
    path: '/setting',
    exact: true,
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
  }
];

export { header, main };
