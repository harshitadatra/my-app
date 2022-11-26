import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { LoginPage } from "./components/Login/Login";
import { ProductListingPage } from "./components/ProductListing/ProductListingPage";
import { WishlistPage } from "./components/Wishlist/WishlistPage";
import { CartListing } from "./components/Cart/CartListing";
// import { MockAPI } from "./mockMan";
import SignUp from "./components/Login/SignUp";

export const RouterPath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartListing />} />
      </Routes>
    </div>
  );
};
