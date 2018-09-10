import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Page } from '~/components/Page';

class Account extends Component {
  render() {
    return (
      <Page>
        <div className="row">
          <div className="col-12 border-bottom py-1">
            <NavLink to="/account/account1">
              <h4>account1</h4>
              <h5>
                <span className="badge badge-danger">@owner</span>
                <span className="badge badge-warning">@active</span>
              </h5>
            </NavLink>
          </div>
          <div className="col-12 border-bottom py-1">
            <NavLink to="/account/account2">
              <h4>account2</h4>
              <h5>
                <span className="badge badge-warning">@active</span>
              </h5>
            </NavLink>
          </div>
          <div className="col-12 border-bottom py-1">
            <NavLink to="/account/account3">
              <h4>account3</h4>
              <h5>
                <span className="badge badge-danger">@owner</span>
                <span className="badge badge-warning">@active</span>
                <span className="badge badge-primary">@posting</span>
              </h5>
            </NavLink>
          </div>
        </div>
      </Page>
    );
  }
}

export default Account;
