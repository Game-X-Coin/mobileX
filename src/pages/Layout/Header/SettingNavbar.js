import React, { Component } from 'react';
import { translate } from 'react-i18next';
import classNames from 'classnames/bind';

import {
  Navbar as BootstrapNavbar,
  NavbarBrand,
  Nav,
  NavItem
} from '~/components/Nav';
import withAuth from '~/utils/auth/withAuth';
import { Logo } from '~/components/Logo';
import styles from './Navbar.scss';

const cx = classNames.bind(styles);

@withAuth
@translate()
class SettingNavbar extends Component {
  render() {
    const { isSignIn, currentUser } = this.props.auth;
    const { t } = this.props;

    const NavItems = () => (
      <React.Fragment>
        <NavItem>nav1</NavItem>
        <NavItem>nav2</NavItem>
      </React.Fragment>
    );

    return (
      <BootstrapNavbar className={cx('navbar', 'border-bottom')} light expand>
        {t('nav.setting')}
        <Nav className="ml-auto" horizontal="horizontal" navbar>
          <NavItems />
        </Nav>
      </BootstrapNavbar>
    );
  }
}

export default SettingNavbar;
