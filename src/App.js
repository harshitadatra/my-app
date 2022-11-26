import "./App.css";
import { ProductListingPage } from "./components/ProductListing/ProductListingPage";
import { Home } from "./components/Home/Home";
import { RouterPath } from "./routes";
import { LoginPage } from "./components/Login/Login";
import { WishlistPage } from "./components/Wishlist/WishlistPage";
import { MockAPI } from "./mockMan";
function App() {
  return (
    <div className="App">
      <RouterPath>
        {/* <LoginPage />
        <Home />
        <ProductListingPage />
        <WishlistPage /> */}
      </RouterPath>
      {/* <MockAPI/>  */}
    </div>
  );
}

export default App;
