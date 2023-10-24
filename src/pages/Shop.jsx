import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import "./Shop.scss";

const Shop = () => {
  const [products, setProducts] = useState([]);

  //   !Modern Async Function Version

  //   useEffect(() => {
  //     const fetchAsync = async () => {
  //       try {
  //         const response = await fetch("https://fakestoreapi.com/products/");
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         } else {
  //           const productsData = await response.json();
  //           console.log(productsData);
  //         }
  //       } catch (error) {
  //         console.error("Error Message", error);
  //       }
  //     };

  //     fetchAsync();
  //   }, []);

  //   !Fetch version

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((productsData) => setProducts(productsData))
      .catch((err) => console.error("Fetch Isue", err));
  }, []);

  return (
    <>
      <section>
        <h1 className="headline-shop">Welcome</h1>
        <article className="shop">
          {products ? (
            products.map((item, index) => (
              <div key={index} className="card center-column">
                <div className="img-card-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>
                <p>{item.title}</p>
                <span>{item.price}</span>
                <Link to={`/product/${item.id}`}>Show More</Link>
              </div>
            ))
          ) : (
            <div className="loading-animation">Loading... </div>
          )}
        </article>
      </section>
    </>
  );
};

export default Shop;
