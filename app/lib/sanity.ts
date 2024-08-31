// create a sanity client that can fetch content fron sanity studio

import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "0eyosne8",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

// we create an image bulder so that we can fetch images from sanity using sanity-url
const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
