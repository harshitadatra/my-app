import { useProduct } from "../../context/product-context";
import { useCart } from "../../context/cart-context";
import { ProductCard } from "./ProductCard";
import{
  priceRangeFilter,
  stockFilter,
  fastDelivery,
  sortData,
  sortByCategory
} from "../../utlis/filter-utlis";

import "./ProductCard.css";
import "./ProductListingPage.css";
import { useFilter } from "../../context/filter-context";
import { useWishlist } from "../../context/wishlist-context";



export const ProductList = () =>
{
  const {prod} = useProduct();
    const {state,dispatch} =useFilter();
    const {wishlist} = useWishlist();
    const {cart} = useCart();
    const wishlistid = wishlist.wishList.map((item) => item._id);
    const cartid = cart.cart.map((item) => item._id);
    console.log(prod.products)
    const {office,livingroom,kitchen,bedroom,dining,kids} = state.categories;
    console.log(state.categories)
    const priceRangeList = priceRangeFilter(prod.products,state.range);
  
  const stockFilterList= stockFilter(priceRangeList,state.onlyInStock);
   const fastDeliveryList = fastDelivery(stockFilterList,state.fastDelivery)
   const sortFinalList = sortData(fastDeliveryList,state.sortBy);
    const sortByCategoryFinalList = sortByCategory(sortFinalList,office,livingroom,kitchen,bedroom,dining,kids);
    console.log(sortByCategoryFinalList);
  return (
    <div className="main-container">
      {sortByCategoryFinalList.map((item) => (
        <ProductCard
          inWishlist={wishlistid.includes(item._id)}
          key={item.id}
          item={item}
          inCart={cartid.includes(item._id)}
        />
      ))}
    </div>
  );
}