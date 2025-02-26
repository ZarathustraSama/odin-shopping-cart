import PropTypes from "prop-types";

import NavigationBar from "../NavigationBar/NavigationBar";

import './HomePage.module.css';

function HomePage({ shoppingCart = [] }) {
  return(
    <>
      <NavigationBar shoppingCart={shoppingCart}></NavigationBar>
      <h1>Welcome to this incredible service that doesn&apos;t expire!</h1>
      <p>This is just a fac-simile for an e-commerce site. Feel Free to navigate the pages via the links above and take a look!</p>
    </>
  )
}

HomePage.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
}

export default HomePage;