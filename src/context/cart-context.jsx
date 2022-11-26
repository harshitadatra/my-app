import { createContext,useContext,useState } from "react";
const CartContext = createContext({cart:[]});
const CartProvider = ({children}) =>
    {
        const [cart,setCart] = useState({cart:[]});
        return(
            <CartContext.Provider value = {{cart,setCart}}>
                {children}
            </CartContext.Provider>
        );
    }
const useCart = () => useContext(CartContext);
export {useCart,CartProvider}
 