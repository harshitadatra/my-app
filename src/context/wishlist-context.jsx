import { createContext,useContext, useState } from "react";
const WishlistContext = createContext({wishList:[]});
const WishlistProvider = ({children}) =>
{
    const [wishlist,setWishlist] = useState({wishList:[]});
    return (
        <WishlistContext.Provider value = {{wishlist,setWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}
const useWishlist = () => useContext(WishlistContext);
export {useWishlist,WishlistProvider};