import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../client";

const builder = imageUrlBuilder(sanityClient);

const Hero = ({ data }) => {
  return (
    <div className="mt-8">
      {data.map((dt, index) => (
        <div key={index} className="lg:flex flex-row-reverse">
          <img
            src={builder.image(dt.image.asset._ref)}
            className="ml-auto mr-auto w-full lg:w-3/6 lg:mr-12"
          />
          <div className="lg:mt-20 lg:ml-12">
            <h1 className="text-4xl ml-4 text-gray-900 font-bold lg:text-7xl ">
              {dt.heading}
            </h1>
            <p className="ml-4 lg:text-xl text-gray-500 mt-4">{dt.tagline}</p>
            <button className="bg-green w-48 h-12 ml-4 mt-8 text-base text-white font-light rounded rounded-2 border border-black shadow-offset-black lg:mt-12">
              {dt.ctas.linkText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
