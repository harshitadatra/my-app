export const productReducer = (prod,action) => {
    switch (action.type)
    {
        case "INITIAL_PRODUCT":
            return {...prod,products: [...action.payload]}
        default :
           return prod;
    }
} 