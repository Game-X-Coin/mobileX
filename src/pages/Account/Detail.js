import React, { Component } from 'react';
import { Page } from '~/components/Page';
import { Image } from '~/components/Image';
import { Button } from '~/components/Button';

class Detail extends Component {
  render() {
    const tokens = [
      { name: 'EOS', symbol: 'EOS', amount: '1.0000' },
      { name: 'Game X Coin', symbol: 'GXC', amount: '1.0000' },
      { name: 'Bitcoin', symbol: 'BTC', amount: '1.0000' }
    ];
    return (
      <Page>
        <h1>Account1</h1>
        <div className="mb-3">
          <div className="border-bottom">
            <div className="font-weight-bold">CPU</div>
            <div>0 ms / 100 ms ( 1.0000 EOS )</div>
          </div>
          <div className="border-bottom">
            <div className="font-weight-bold">Network</div>
            <div>0 bytes / 1,000 KB ( 1.0000 EOS )</div>
          </div>
          <div className="border-bottom">
            <div className="font-weight-bold">RAM</div>
            <div>3.37 KB / 3.98 KB</div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col border bg-dark text-white">Balance</div>
          <div className="col border">Permission</div>
        </div>
        <div>
          <Button>Transfer</Button>
        </div>
        <div className="row">
          {tokens.map(token => (
            <div
              className="col-12 border-bottom py-2 coin d-flex justify-content-between align-items-center"
              key={token.symbol}
            >
              <div>
                <Image
                  className="logo"
                  src={`logo/coin/${token.symbol.toLowerCase()}.svg`}
                />
                <b>{token.name}</b>
              </div>
              <div>
                {token.amount} {token.symbol}
              </div>
            </div>
          ))}
        </div>
      </Page>
    );
  }
}

export default Detail;
