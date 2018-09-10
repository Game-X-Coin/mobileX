import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { translate } from 'react-i18next';
import classNames from 'classnames/bind';

import { Navbar as BootstrapNavbar, Nav, NavItem } from '~/components/Nav';
import withAuth from '~/utils/auth/withAuth';
import styles from './Navbar.scss';

const cx = classNames.bind(styles);

@withAuth
@translate()
class TransactionNavbar extends Component {
  render() {
    const { t } = this.props;

    const NavItems = () => (
      <React.Fragment>
        <NavItem>nav1</NavItem>
        <NavItem>nav2</NavItem>
      </React.Fragment>
    );

    return (
      <BootstrapNavbar className={cx('navbar', 'border-bottom')} light expand>
        <NavLink to="/transaction">{t('nav.transaction')}</NavLink>
        <Nav className="ml-auto" horizontal="horizontal" navbar>
          <NavItems />
        </Nav>
      </BootstrapNavbar>
    );
  }
}

export default TransactionNavbar;
