import "../Navbar/Navbar.css"
import React from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useWishlist } from "../../context/wishlist-context";
import {useCart} from "../../context/cart-context"

export const Navbar = () => {
    const {user,setUser} = useAuth();
    const {wishlist,setWishlist} = useWishlist();
    const {cart,setCart} = useCart();
    const logoutHandler=() => 
    {
        setUser({token:null});
        navigate("/");
        setWishlist({wishlist:[]});;
        setCart({cart:[]});
    }
    const navigate = useNavigate();
    return (
      <div>
        <nav className="main-nav">
          <div className="website-brand">FullStop</div>

          <div className="nav-categories">
            <Link className="category-name home-url" to="/">
              HOME
            </Link>
            <Link className="category-name products-url" to="/products">
              PRODUCTS
            </Link>
          </div>

          <div className="nav-icons">
            <div>
              {user.token === null ? (
                <Link to="/login">
                  <i className="fa-solid fa-user"></i>
                  <div>login</div>
                </Link>
              ) : (
                <div onClick={logoutHandler}>
                  <i className="fa-solid fa-user"></i>
                  <div>logout</div>
                </div>
              )}
            </div>
            <div>
              {user.token === null ? (
                <Link to="/login">
                  <i className="fa-regular fa-heart"></i>
                  <div>wishlist</div>
                </Link>
              ) : (
                <Link to="/wishlist">
                  <i className="fa-regular fa-heart"></i>
                  <div>wishlist</div>
                </Link>
              )}
            </div>
            <div>
              {user.token === null ? (
                <Link to="/login">
                  <i className="fa-solid fa-bag-shopping"></i>
                  <div>cart</div>
                </Link>
              ) : (
                <Link to="/cart">
                  <i className="fa-solid fa-bag-shopping"></i>
                  <div>cart</div>
                </Link>
              ) }
            </div>
          </div>
        </nav>
      </div>
    );
  };
  