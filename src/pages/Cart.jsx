import React from "react";

const Cart = () => {
  return (
    <div className="books__body">
      <div className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <div className="cart__book">Book</div>
                <div className="cart__quantity">Quantity</div>
                <div className="cart__total">Price</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
