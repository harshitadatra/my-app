import { createContext,useReducer, useContext } from "react";
import { filterReducer } from "../reducer/filterReducer";
const FilterContext = createContext();

const initialState = 
{
    range: 5000,
    onlyInStock: true,
    fastDelivery: false,
    sortBy: null,
    categories: {
      office: false,
      livingroom: false,
      kitchen: false,
      bedroom: false,
      dining: false,
      kids:false,
    },
};

const FilterProvider = ({children}) =>
{
    const [state,dispatch]= useReducer(filterReducer,initialState);

    
     return(
        <FilterContext.Provider value={{state,dispatch}}>
         {children}
        </FilterContext.Provider>
     )
}
const useFilter = () => useContext(FilterContext);
export {useFilter,FilterProvider}