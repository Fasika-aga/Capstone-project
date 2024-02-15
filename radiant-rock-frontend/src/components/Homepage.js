import React from "react";
import Navbar from "./Navbar";
import Signup from "./Signup";
import GemstoneDetail from "./GemstoneDetails";
import Login from "./Login";
import GemstoneList from "./GemstoneList";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <GemstoneList />
      <Login />
      <Signup />
      // <GemstoneDetail />
    </div>
  );
};

export default Homepage;