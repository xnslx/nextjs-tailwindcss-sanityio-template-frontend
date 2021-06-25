import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../client";

const builder = imageUrlBuilder(sanityClient);
const { projectId, dataset } = sanityClient.config();

const PricingSection = ({ data }) => {
  const [item] = data;
  const { heading, label, subheading, pricingchoose } = item;

  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };

  return (
    <div className="mt-36">
      <div>
        <h3 className="text-4xl text-center text-gray-900 font-semibold">
          {heading}
        </h3>
        <h3 className="mt-2 text-center text-gray-070 text-center ml-auto mr-auto">
          {subheading}
        </h3>
        <p className="text-center text-gray-500 w-2/3 text-center ml-auto mr-auto">
          {label}
        </p>
      </div>
      <div className=" mt-8 mb-8 w-4/5 ml-auto mr-auto lg:w-5/6 lg:flex flex-row lg:justify-around">
        {pricingchoose.map((pc, index) => (
          <div
            key={index}
            className="border border-black shadow-offset-black mb-8"
          >
            <div className="p-4 flex flex-col lg:h-96 ">
              <img
                src={builder.image(pc.icon.asset._ref)}
                className="lg:h-64 lg:w-96"
              />
              <p className="text-green text-sm uppercase">{pc.chooselabel}</p>
              <h2 className="text-4xl font-bold lg:py-4">{pc.price}</h2>
              <hr></hr>
            </div>
            <BlockContent
              blocks={pc.text}
              serializers={serializers}
              projectId={projectId}
              dataset={dataset}
              className="p-4"
            />
            {pc.ctas.map((cta, index) => (
              <button key={index} className="p-4 text-green font-semibold">
                {cta.linkText}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
