import Head from "next/head";
import { sanityClient } from "../client";
import Hero from "../components/hero";
import CompanySection from "../components/companySection";
import ServiceSection from "../components/serviceSection";
import ProgressSectinon from "../components/progressSection";
import PricingSection from "../components/pricingSection";
import Layout from "../components/layout";

function Home({ data }) {
  const [item] = data;
  const { content } = item;
  const heroDataArray = [];
  const companyDataArray = [];
  const serviceDataArray = [];
  const progressDataArray = [];
  const pricingDataArray = [];

  const heroData = content.map((ct) => {
    if (ct._type == "hero") {
      heroDataArray.push(ct);
      return heroDataArray;
    }
  });

  const companyData = content.map((ct) => {
    if (ct._type == "companySection") {
      companyDataArray.push(ct);
      return companyDataArray;
    }
  });

  const serviceData = content.map((ct) => {
    if (ct._type == "serviceSection") {
      serviceDataArray.push(ct);
      return serviceDataArray;
    }
  });

  const progressData = content.map((ct) => {
    if (ct._type == "progressSection") {
      progressDataArray.push(ct);
      return progressDataArray;
    }
  });

  const pricingData = content.map((ct) => {
    if (ct._type == "pricingSection") {
      pricingDataArray.push(ct);
      return pricingDataArray;
    }
  });

  return (
    <div className="">
      <Layout />
      <Hero data={heroDataArray} />
      <CompanySection data={companyDataArray} />
      <ServiceSection data={serviceDataArray} />
      <ProgressSectinon data={progressDataArray} />
      <PricingSection data={pricingDataArray} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "page"]';
  const data = await sanityClient.fetch(query);
  console.log("getServerSideProps", data);
  return {
    props: {
      data,
    },
  };
};

export default Home;
