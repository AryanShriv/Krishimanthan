import React, { Fragment } from "react";

import LifeStyle from "../Components/LifestyleCard/Lifestyle";
import Popular from "../Components/PopularCard/Popular";
import Hero from "../Components/Hero/Hero";
import Category from "../Components/Category/Category";
import Mission from "./Mission/Mission";

const Home = () => {
  return (
    <Fragment>
      <Hero/>
      <Category/>
      <Popular/>
      <LifeStyle />
      <Mission/>
    </Fragment>
  );
};

export default Home;
