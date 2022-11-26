import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductProvider } from "./context/product-context";
import {FilterProvider} from "./context/filter-context"
import {AuthProvider} from "./context/auth-context"
import { CartProvider } from "./context/cart-context";
import { WishlistProvider } from "./context/wishlist-context";

// import reportWebVitals from "./reportWebVitals";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <WishlistProvider>
          <AuthProvider>
            <FilterProvider>
              <ProductProvider>
                <App />
              </ProductProvider>
            </FilterProvider>
          </AuthProvider>
        </WishlistProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//          <Router>
//     <FilterProvider>
//     <ProductProvider>
//    <App />
//     </ProductProvider>
//     </FilterProvider>
//     </Router>
//   </React.StrictMode>
// );

// reportWebVitals();
