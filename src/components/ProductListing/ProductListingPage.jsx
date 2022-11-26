import { FilterSideBar } from "./FilterSideBar";
import { Navbar } from "../Navbar/Navbar";
// import { ProductCard } from "./ProductCard";
import "./ProductListingPage.css";
import { ProductList } from "./ProductList";
export const ProductListingPage = () => 
{
    return (
        <div>
        <Navbar/>
         <div className="product-container">
        <FilterSideBar/>
       <ProductList/>
       </div>
       
        </div>
  

    );
}