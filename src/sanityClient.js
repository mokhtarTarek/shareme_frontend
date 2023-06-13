import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',// see sanity preference
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    token: process.env.REACT_APP_SANITY_API_TOKEN // Only if you want to update content with the client
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);