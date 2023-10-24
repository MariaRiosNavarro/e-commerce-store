import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import PropTypes from "prop-types";
import "./Product.scss";

const Product = () => {
  const [item, setItem] = useState();

  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setItem(json))
      .catch((err) => console.error("Fetch Api Issue", err));
  }, []);

  if (!item) {
    return <p>Loading...</p>;
  }

  // console.log(item);

  return (
    <>
      <h1>Component</h1>
      <section className="detail-wrapper">
        <div className="card center-column">
          <div className="img-card-wrapper">
            <img src={item.image} alt={item.title} />
          </div>
          <p>{item.title}</p>
          <p>{item.category}</p>
          <p>{item.description}</p>
          <span className="price">{item.price}</span>
          <Link to="/shop">Back to Shop</Link>
        </div>
      </section>
    </>
  );
};

// Product.propTypes = {
//   property: PropTypes.string,
// };

export default Product;
