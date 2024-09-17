import "./Homepage.css";
import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";
import { useEffect, useState } from "react";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Categories />
    </>
  );
};

export default Homepage;
