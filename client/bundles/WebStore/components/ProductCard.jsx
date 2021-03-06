import React from 'react';

export class ProductCard extends React.Component {
  // This method is new
  renderButton() {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

    return (
      <div className="btn-group">
        <form method="POST" action="/shopping_cart/add">
          <input type="hidden" name="authenticity_token" value={csrfToken}/>
          <input type="hidden" name="shopping_cart_item[product_id]" value={this.props.id}/>
          <input type="hidden" name="shopping_cart_item[quantity]" value="1"/>

          <button type="submit" className="btn btn-sm btn-outline-secondary">
            Add to Cart
          </button>
        </form>
      </div>
    );
  }

  render() {
    const amount = this.props.price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    return (
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <div className="product-image d-flex align-items-center justify-content-center">
            <h2>Image placeholder</h2>
          </div>

          <div className="card-body">
            <p className="card-text">
              <strong>{this.props.name}</strong>
              <br/>
              This is a product description.
              It describes the product and gives the reader a reason to buy it.
            </p>

            <div className="d-flex justify-content-between align-items-center">
              {this.renderButton()}

              <div>{amount}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
