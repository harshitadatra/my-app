import React from 'react';
import "../Wishlist/Wishlist.css";
import { useWishlist } from '../../context/wishlist-context';
import {useAuth} from "../../context/auth-context"
import axios from 'axios';



export  const WishlistCard = ({item}) => {
   const { wishlist, setWishlist } = useWishlist();
    const { user } = useAuth();
    
    const removeWishList = async () => {
    try {
      const deleteResponse = await axios({
        method: "delete",
        url: `/api/user/wishlist/${item._id}`,
        headers: { authorization: user.token },
        data: { product: item },
      });

      setWishlist({ wishList: deleteResponse.data.wishlist });
      // setInWishlist(false);
    } catch (error) {
      console.log(error);
    }
  };
   
  return (
    <div>
      
        <div className="product-card">
          <div className="image-container">
            <img src= {item.imgSource} className="product-image" />
            <i onClick={removeWishList} className="fa fa-solid fa-xmark"></i>
          </div>
          <div className="brand-name">{item.brandName}</div>
          <div className="product-details">
            <div className="product-name">{item.productName}</div>
            <div className="product-price">{item.price}</div>
          </div>
        </div>
      
    </div>
  );
}


