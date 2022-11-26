export const filterReducer = (state,action)=>
{
    switch(action.type)
    {
        case "RANGE_FILTER":
            return { ...state,range:action.payload};
         case "ONLY_IN_STOCK":
            return {...state,onlyInStock:action.payload};
        case "FAST_DELIVERY":
            return {...state,fastDelivery:action.payload};
        case "SORT_BY":
            return {...state,sortBy:action.payload};
        case "ALL":
            return{...state,
                categories:{ ...state.categories, all: !state.categories.all}};
        case "OFFICE":
            return{...state,
                categories:{...state.categories,office:!state.categories.office}}
        case "LIVINGROOM":
                return{...state,
                     categories:{...state.categories,livingroom:!state.categories.livingroom}}
         case "KITCHEN":
                return {...state,categories:{...state.categories,kitchen:!state.categories.kitchen}}
        case "BEDROOM":
                return{
                 ...state,categories:{...state.categories,bedroom:!state.categories.bedroom}
                }
        case "DINING":
            return{...state,
                categories:{...state.categories,dining:!state.categories.dining}
            }
        case "KIDS":
            return{...state,
                categories:{...state.categories,kids:!state.categories.kids}
            }

        default:
            return state;
    
    
    }

}