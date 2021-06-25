import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../client";
import CircleIcon from "./ui/Circle";

const builder = imageUrlBuilder(sanityClient);

const ServiceSection = ({ data }) => {
  const [item] = data;
  const { heading, label, services } = item;

  return (
    <div className="mt-36">
      <h3 className="text-4xl text-center text-gray-900 font-semibold mt-20">
        {heading}
      </h3>
      <p className="text-center text-gray-500 w-2/3 text-center ml-auto mr-auto">
        {label}
      </p>
      <div className="mt-8">
        <div className="">
          {services.map((service, index) => (
            <div
              key={index}
              className="lg:flex lg:flex-row lg:even:flex-row-reverse lg:even:w-11/12 ml-auto mr-auto mt-8"
            >
              <div className="lg:w-2/5 lg:ml-auto lg:mr-auto lg:mt-8">
                <img src={builder.image(service.image.asset._ref)} />
              </div>
              <div className="lg:mr-28">
                <h4 className="mt-16 text-2xl text-center text-gray-900 font-semibold">
                  {service.subheading}
                </h4>
                <p className="text-base text-center text-gray-500 w-2/3 text-center ml-auto mr-auto">
                  {service.sublabel}
                </p>
                <div className="mt-12">
                  {service.everyservice.map((i, index) => (
                    <div key={index}>
                      <h4 className="mt-8 text-lg text-center text-green">
                        {i.everylabel}
                      </h4>
                      <p className="text-base text-center text-gray-700 w-2/3 text-center ml-auto mr-auto">
                        {i.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
