import "../ProductListing/FilterSideBar.css"

import { useFilter } from "../../context/filter-context";
import { useProduct } from "../../context/product-context";
export const FilterSideBar = () => 
{
    const {state,dispatch} =useFilter();
    const {products} =useProduct();
    
    return (
      <div>
        <aside className="side-container">
          <div className="range-filter">
            <label>
              <input
                type="range"
                min="0"
                max="200000"
                value={state.range}
                onChange={(e) =>
                  dispatch({ type: "RANGE_FILTER", payload: e.target.value })
                }
              />
            </label>
          </div>
          <div className="price-filter">
            <div className="filter-heading">Price</div>
            <div>
              <label htmlFor="">
                <input
                  type="radio"
                  checked={state.sortBy === "HIGH_TO_LOW"}
                  className="price"
                  name="sort"
                  onChange={() =>
                    dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
                  }
                />
                High to low
              </label>
            </div>
            <div>
              <label htmlFor="">
                <input
                  type="radio"
                  checked={state.sortBy === "LOW_TO_HIGH"}
                  className="price"
                  name="sort"
                  onChange={() =>
                    dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
                  }
                />
                Low to High
              </label>
            </div>
          </div>

          <div className="availability-filter">
            <div className="filter-heading">Availability</div>
            <div>
              <input
                checked={state.onlyInStock}
                type="checkbox"
                className="stock-availabilty"
                onChange={(e) =>
                  dispatch({ type: "ONLY_IN_STOCK", payload: e.target.checked })
                }
              />
              <label htmlFor="stock-availability">Include Out Stock</label>
            </div>
            <div>
              <input
                checked={state.fastDelivery}
                type="checkbox"
                className="stock-availability"
                onChange={(e) =>
                  dispatch({ type: "FAST_DELIVERY", payload: e.target.checked })
                }
              />
              <label htmlFor="stock-availability">Express Delivery</label>
            </div>
          </div>

          <div className="brand-filter">
            <div>Brand</div>
           
            <div>
              <input
                checked={state.categories.office}
                type="checkbox"
                
                name="c1"
                onChange={(e) => dispatch({ type: "OFFICE" })}
              />
              <label htmlFor="brand-name">Office</label>
            </div>
            <div>
              <input
                checked={state.categories.livingroom}
                type="checkbox"
               
                name="c2"
                onChange={(e) => dispatch({ type: "LIVINGROOM" })}
              />
              <label htmlFor="brand-name">Living Room</label>
            </div>
            <div>
              <input
                checked={state.categories.kitchen}
                type="checkbox"
               
                name="c3"
                onChange={(e) => dispatch({ type: "KITCHEN" })}
              />
              <label htmlFor="brand-name">Kitchen</label>
            </div>
            <div>
              <input
                checked={state.categories.dining}
                type="checkbox"
              
                name="c4"
                onChange={(e) => dispatch({ type: "DINING" })}
              />
              <label htmlFor="brand-name">Dining</label>
            </div>
            <div>
              <input
                checked={state.categories.kids}
                type="checkbox"
              
                name="c5"
                onChange={(e) => dispatch({ type: "KIDS" })}
              />
              <label htmlFor="brand-name">Kids</label>
            </div>
          </div>
        </aside>
      </div>
    );
}