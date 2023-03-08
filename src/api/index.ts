import { transformAboutMeData } from "../utils";

export async function getAboutMeItems() {
  console.log(
    process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
  );

  const res = await fetch(
    `https://preview.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
  );
  const json = await res.json();
  const filteredList = transformAboutMeData(json.includes.Asset, json.items);
  return filteredList;
}
