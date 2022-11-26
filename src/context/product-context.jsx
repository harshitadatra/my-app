import { createContext, useContext, useReducer,useEffect } from "react";

import { productReducer } from "../reducer/productReducer";
import axios from "axios";
const initialValue = {
    products: [],
};
const ProductContext = createContext();
const ProductProvider = ({children})=> { 
    const [prod,dispatch1] = useReducer(productReducer,initialValue)
    useEffect (()=> {
    (async () => 
        {const productResponse = await axios.get("/api/products");
        
            if(productResponse.status === 200)
            { 

                dispatch1(
                    {
                        type:"INITIAL_PRODUCT",
                        payload: productResponse.data.products,
                    });
                    //   console.log(productResponse.data.products);
            }
        })();
    
    },[])
    

    return(
    <ProductContext.Provider value={{prod,dispatch1}}>
        {children}
    </ProductContext.Provider>
);
}
const useProduct = () => useContext(ProductContext);
export {ProductProvider,useProduct};