import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useAuth } from "../../context/auth-context";
import { useWishlist } from "../../context/wishlist-context";
import "./ProductCard.css"

 export const ProductCard = ({item,inCart,inWishlist}) => 
{
    const navigate = useNavigate();
    const {wishlist,setWishlist} = useWishlist();
    const {setCart} = useCart();
    const {user} = useAuth();


  const addToWishlistHandler = async () => 
  {
    if(user.token === null)
    {
      navigate("/login");
    }
    try 
    {
      const response = await axios({
        method:"post",
        url:"/api/user/wishlist",
        headers:{authorization:user.token},
        data: {product:item},
      });
      console.log("wishlist response",response);
      setWishlist({wishList:response.data.wishlist});
      setInWishlist(true);
    }
    catch(error)
    {
      console.log(error)
    }
  }
  const goCartHandler = async () => 
  {
     if(user.token === null)
     {
      navigate("/login")
     }
     try{
       
      const cartResponse = await axios({
        method:"post",
        url:"api/user/cart",
        headers:{authorization: user.token},
        data:{product:item}
      })
    setCart({cart:cartResponse.data.cart});
  
     }
     catch(error)
     {
      console.log(error);
     }
  }
  const removeWishList = async ()=>
  {
      try {
      const deleteResponse = await axios({
        method: "delete",
        url: `/api/user/wishlist/${item._id}`,
        headers: { authorization: user.token },
        data: { product: item },
      });
       
      setWishlist({ wishList: deleteResponse.data.wishlist });
  
    } catch (error) {
      console.log(error);
    }

  }
   
    return (
      <div>
        <div className="product-card">
          <div className="product-image-container">
            <img
              src={item.imgSource}
              className="product-image"
              alt="cannot-display"
            />
            { inWishlist ? <i onClick={removeWishList} class="fa-solid fa-heart wishlist-heart"></i> :
            <i onClick={addToWishlistHandler} class="fa-regular fa-heart wishlist-heart-solid"></i>
            }
          </div>
          <div className="brand-name">
            {item.brand}

            {inCart ? (
              <button class="add-to-cart-button" onClick={() => navigate("/cart")}> Go to cart</button>
            ) : (
              <button class="add-to-cart-button" onClick={goCartHandler}>
                Add to cart
              </button>
            )}
          </div>

          <div className="product-details">
            <div className="product-name">{item.productName}</div>
            <div className="product-price">{item.price}</div>
          </div>
        </div>
      </div>
    );
}