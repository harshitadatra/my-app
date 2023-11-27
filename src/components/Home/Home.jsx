import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";

import "../Home/Home.css";
export const Home = () => {
  return (
    <div>
      <Navbar />

      <main className="main-container">
        <div className="details-container">
          <h1 className="heading1">Design Your Comfort Zone</h1>
          <div className="secondary-tagline">
            Find the perfect piece of furniture for your day to day needs,
            without compromising on beauty or functionality.
          </div>
          <button className="shop-button">
            <Link to="/products">Shop Now</Link>
          </button>
        </div>
        <img
          className="main-image"
          src="https://gnconstruction.net/wp-content/uploads/2019/07/apartment-architecture-artist-447592.jpg"
          alt="no-image"
        />
      </main>
      <div className="featured-container">
        <h1 className="feature-heading">Feature products</h1>
        <div className="home-product-container">
          <div className="product-card">
            <img
              src="https://www.course-api.com/images/store/product-7.jpeg"
              className="product-image"
              alt="no-image"
            />
            <div className="brand-name">Ikea</div>
            <div className="product-details">
              <div className="product-name">Entertainment Center</div>
              <div className="product-price">₹29,999.50</div>
            </div>
          </div>
          <div className="product-card">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5af031fe1137a69ce89114fd/1553181413052-OTPAICWJZZ3TSRWBL7RJ/where-to-buy-vintage-furniture-online.jpg?format=1500w"
              className="product-image"
              alt="no-image"
            />
            <div className="brand-name">Ikea</div>
            <div className="product-details">
              <div className="product-name">High-Back Bench</div>
              <div className="product-price">₹19,999.50</div>
            </div>
          </div>
          <div className="product-card">
            <img
              src="https://uspropainters.com/wp-content/uploads/2021/10/How-Light-Affects-Paint.jpg"
              className="product-image"
              alt="no-image"
            />
            <div className="brand-name">Ikea</div>
            <div className="product-details">
              <div className="product-name">Modern Bookshelf</div>
              <div className="product-price">₹15,999.50</div>
            </div>
          </div>
        </div>
        <div className="all-products-button">
          <button className="shop-button">
            {" "}
            <Link to="/products">All Products </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
