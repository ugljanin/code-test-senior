import fetch from "node-fetch";
export const getNews = async (search) => {
  const response = await fetch("http://localhost:3000/api/collections", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
  const collections = await response.json();

  const collection = collections.filter((collection) => {
    return collection.collectiontype === search;
  });
  const collectionUrl = `http://localhost:3000/api/collection/${collection[0].collectionid}`;

  const news = await fetch(collectionUrl, {
    method: "GET",
  }).then((response) => response.json());
  return news;
};
