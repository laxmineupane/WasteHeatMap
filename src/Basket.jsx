import React, { Component } from "react";

export default class Basket extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className="alert alert-info">
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>You Have {cartItems.length} products in the basket.</div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul>
              {cartItems.map(item => (
                <li>
                  <b> {item.title} </b> X {item.count} ={" "}
                  {item.price * item.count}
                  <button
                    className="btn btn-danger"
                    onClick={e => this.props.handleRemoveFromCart(e, item)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            Total : $ {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
            <br />
            <button
              className="btn btn-primary"
              onClick={() => alert("Checkout needs to implement....")}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    );
  }
}