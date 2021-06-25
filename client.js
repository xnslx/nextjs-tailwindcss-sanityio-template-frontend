import { createClient, createImageUrlBuilder } from "next-sanity";

const config = {
    dataset: "production",
    projectId: "aqm1x7ig",
    useCdn: false,
};
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);