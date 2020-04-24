import React from 'react';

export class SiteHeader extends React.Component {
  render() {
    return (
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <strong>Web Store</strong>
          </a>

          <a href="/checkout" className="navbar-brand">
            In Cart: {this.props.shopping_cart_item_count}
          </a>
        </div>
      </header>
    );
  }
}
