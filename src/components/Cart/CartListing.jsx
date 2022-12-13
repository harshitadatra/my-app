import React from 'react';
import { Navbar } from  '../Navbar/Navbar';
import { useCart } from "../../context/cart-context";
import {CartCard} from "../Cart/CartCard";
import {OrderSummary} from './OrderSummary';
import "./CartListing.css"
import { Link } from 'react-router-dom';

export const CartListing = ({item}) => {
 const {cart,setCart} = useCart();
 
 const cartid = cart.cart.map((item) => item._id);

 

  return (
    <div>
      <Navbar />
      {cart.cart.length===0 ? (
      <div class="empty-cart">
         <div class="empty-cart-heading"> Your cart is empty </div>
         <div class="empty-wishlist-button">
          <Link to="/products">Add items</Link>
          </div>
         
         </div>) : 
      (
      <div className="card-container">
        <div className="aside-container">
          {cart.cart.map((item) => (
            <CartCard
              inCart={cartid.includes(item._id)}
              key={item.id}
              item={item}
            />
          ))}
        </div>
        <OrderSummary />
      </div>
      )
       }
    </div>
  );
}


