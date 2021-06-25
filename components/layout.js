import React, { useEffect, useState } from "react";
import { sanityClient } from "../client";
import HamburgerIcon from "../components/ui/Hamburger";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

const Layout = () => {
  const [layoutData, setLayoutData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "site-config"]`)
      .then((data) => {
        setLayoutData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const menuToggleHandler = (e) => {
    setOpen(!open);
  };

  return (
    <div className="ml-4 mt-4 lg:flex lg:flex-row lg:ml-12">
      {layoutData.map((dt, index) => (
        <div key={index}>
          <img src={builder.image(dt.logo.asset._ref).width(56)} />
          <button
            onClick={menuToggleHandler}
            className="absolute right-0 mr-8 -mt-8 lg:hidden"
          >
            <HamburgerIcon />
          </button>

          <ul
            className={`
            flex flex-col w-4/5 ml-auto mr-auto text-center mt-4 lg:flex lg:flex-row lg:absolute lg:w-2/3 lg:right-0 lg:justify-around lg:mr-14 lg: -mt-8
            lg:flex ${open ? "block" : "hidden"}
          `}
          >
            {dt.mainNavigation.map((i, index) => (
              <li key={index} className="p-2 hover:bg-green rounded">
                {i}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Layout;
