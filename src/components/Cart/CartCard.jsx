import axios from 'axios';
import React from 'react';
import { useCart } from "../../context/cart-context";
import { useAuth } from "../../context/auth-context";
import "../Cart/CartCard.css"

 export const CartCard = ({item}) => {
    const { user } = useAuth();
    const { setCart } = useCart();
    console.log(item)
    const removeFromCartHandler = async () => {
      try {
        const cartDeleteResponse = await axios({
          method: "delete",
          url: `/api/user/cart/${item._id}`,
          headers: { authorization: user.token },
          data: { product: item },
        });

        setCart({ cart: cartDeleteResponse.data.cart });
      } catch (error) {
        console.log(error);
      }
    };

  const incrementHandler = async () =>
  {
     const responseForIncrement = await axios({
        method:"post",
        url: `/api/user/cart/${item._id}`,
        headers:{authorization:user.token},
        data:
        {
          action:{
            type:"increment"
          }
        }
     })
     setCart({cart: responseForIncrement.data.cart});
  }
  
  const decrementHandler = async () => 
  {
    if(item.qty>1)
    {
    const reponseForDecrement = await axios({
      method:"post",
      url:`/api/user/cart/${item._id}`,
      headers:{authorization:user.token},
      data:
      {
        action:{
          type: "decrement"
        }
      }
    })
    setCart({cart:reponseForDecrement.data.cart})
  }
  }
 
  return (
    <>
      <div className="horizontal-container">
        <div className="image-container">
          <img className="horizontal-image" src={item.imgSource} />
        </div>
        <div className="cart-details-container">
          <div className="product-details">
            <div className="product-name">{item.brand}</div>

            <div>{item.description}</div>
          </div>
          <div className="button-container">
            <div className="quantity-container">
              <button
                onClick={incrementHandler}
                className="fa-solid fa-plus"
              ></button>
              <div className="quantity">{item.qty}</div>
              <button
                onClick={decrementHandler}
                className="fa-solid fa-minus"
              ></button>
            </div>
          </div>
          <div className="cart-product-price">{item.price}</div>
          <i onClick={removeFromCartHandler}class="fa-sharp fa-solid fa-trash"></i>
        </div>
      </div>
    </>
  );
}

export default CartCard
