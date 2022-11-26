import React from 'react';
import "./OrderSummary.css";
import { useCart } from '../../context/cart-context';

export const OrderSummary = () => {
  const {cart} = useCart();
  console.log(cart);
  console.log(cart.cart);


  const subTotal = cart.cart.reduce((acc,curr)=>
  {
    return acc+curr.qty*curr.price;
  },0);
  return (
    <>
      <main class="order-main-container">
        <h4>PRICE DETAILS</h4>
        <hr/>
        <div class="price-details-container">
          <div> Price</div>
          <div>{subTotal}</div>
        </div>
        <div class="price-details-container">
          <div>discount</div>
          <div> - Rs. 40</div>
        </div>

        <div class="price-details-container">
          <div> delivery</div>
          <div> FREE</div>
        </div>
        <hr/>
        <div class="price-details-container">
          <div> Total Amount</div>
          <div> {subTotal}</div>
        </div>
        <hr/>
        <button class="place-order-button">Place Order</button>
      </main>
    </>
  );
}


