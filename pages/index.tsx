import React, { useState } from "react";
import Nav from "./Components/Nav";
import MobileNav from "./Components/MobileNav";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div className="">
        <MobileNav />
        <Nav />
      </div>
    </div>
  );
};

export default HomePage;
