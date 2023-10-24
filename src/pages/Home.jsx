import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <section>
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
