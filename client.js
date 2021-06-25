import { createClient, createImageUrlBuilder } from "next-sanity";
import { projectId } from "./config";

const config = {
    dataset: "production",
    projectId: projectId,
    useCdn: false,
};
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);