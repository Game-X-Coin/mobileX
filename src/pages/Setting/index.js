import React, { Component } from 'react';
import { Page } from '~/components/Page';

class Setting extends Component {
  render() {
    return (
      <Page>
        <div className="row">
          <div className="col-12 border-bottom py-2">Local Account</div>
          <div className="col-12 border-bottom py-2">Language</div>
          <div className="col-12 border-bottom py-2">Network</div>
          <div className="col-12 border-bottom py-2">Sign Out</div>
        </div>
      </Page>
    );
  }
}

export default Setting;
