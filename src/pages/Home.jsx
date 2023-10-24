import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <section className="center-column home-section">
        <h1>Welcome to the Shop</h1>
        <article>
          <Link to="/shop">Shop</Link>
        </article>
      </section>
    </>
  );
};

Home.propTypes = {
  property: PropTypes.string,
};

export default Home;
