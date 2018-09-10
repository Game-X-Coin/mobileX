import React, { Component } from 'react';
import { translate } from 'react-i18next';
import classNames from 'classnames/bind';

import { Navbar as BootstrapNavbar, Nav, NavItem } from '~/components/Nav';
import withAuth from '~/utils/auth/withAuth';
import styles from './Navbar.scss';

const cx = classNames.bind(styles);

@withAuth
@translate()
class Navbar extends Component {
  render() {
    const { t } = this.props;

    const NavItems = () => (
      <React.Fragment>
        <NavItem to="/account">{t('nav.account')}</NavItem>
        <NavItem to="/transaction">{t('nav.transaction')}</NavItem>
        <NavItem to="/key">{t('nav.key')}</NavItem>
        <NavItem to="/setting">{t('nav.setting')}</NavItem>
      </React.Fragment>
    );

    return (
      <BootstrapNavbar className={cx('navbar', 'border-top')} light expand>
        <Nav className="m-auto" horizontal="horizontal" navbar>
          <NavItems />
        </Nav>
      </BootstrapNavbar>
    );
  }
}

export default Navbar;
