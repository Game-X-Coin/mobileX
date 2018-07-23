import React, { Component } from 'react';
import Routes from './Routes';

class Main extends Component {
  render() {
    return (
      <main className="flex-fill d-flex align-items-center" role="main">
        <Routes />
      </main>
    );
  }
}

export default Main;