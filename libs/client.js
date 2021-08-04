import { createClient } from "microcms-js-sdk";
console.log(process.env.MICRO_CMS_API_KEY)
console.log(process.env)
export const client = createClient({
  serviceDomain: "yohei-blog",
  apiKey: process.env.MICRO_CMS_API_KEY,
});
