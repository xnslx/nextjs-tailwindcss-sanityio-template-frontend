import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../client";

const builder = imageUrlBuilder(sanityClient);

const CompanySection = ({ data }) => {
  return (
    <div className="mt-36">
      {data.map((dt, index) => (
        <div key={index}>
          <h3 className="text-4xl text-center text-gray-900 font-semibold mt-20">
            {dt.heading}
          </h3>
          <p className="text-center text-gray-500 w-2/3 text-center ml-auto mr-auto">
            {dt.label}
          </p>
          <div className="mt-8 w-4/5 ml-auto mr-auto flex flex-row justify-around">
            {dt.image.map((ig, index) => (
              <img key={index} src={builder.image(ig.asset._ref).width(64)} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanySection;
