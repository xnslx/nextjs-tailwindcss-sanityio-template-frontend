import React from "react";

import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../client";

const builder = imageUrlBuilder(sanityClient);

const ProgressSection = ({ data }) => {
  const [item] = data;
  const { heading, label, steps } = item;

  return (
    <div className="mt-36">
      <h3 className="text-4xl text-center text-gray-900 font-semibold">
        {heading}
      </h3>
      <p className="text-center text-gray-500 w-2/3 text-center ml-auto mr-auto">
        {label}
      </p>
      <div className="flex flex-col w-4/5 ml-auto mr-auto mt-8 lg:flex-row lg:w-10/12 lg:flex-wrap lg:gap-x-12 lg:justify-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className=" mb-4 border border-black rounded rounded-2 shadow-offset-black flex flex-row lg:flex-col lg:h-40 lg:w-56"
          >
            <img
              src={builder.image(step.image.asset._ref).width(56)}
              className="object-contain lg:w-12 lg:m-4"
            />
            <div className="ml-4">
              <h3 className="font-medium">{step.subheading}</h3>
              <p className="text-sm text-gray-500">{step.sublabel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSection;
