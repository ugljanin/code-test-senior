import express from "express";
import { getNews } from "./libs/index.js";
import { getAllCollections, getCollectionNews } from "./controllers/index.js";
import cors from "cors";

const app = express();

const port = 3000;
const host = "localhost";

// EXPRESS SPECIFIC STUFF
app.use(express.static("public")); // For serving static files
app.use(cors());
app.set("json spaces", 40);

// PUG SPECIFIC STUFF
app.set("views", "./views");
app.set("view engine", "pug");

// ENDPOINTS
app.get("/api/collections", getAllCollections);
app.get("/api/collection/:id", getCollectionNews);
app.get("/", async (req, res) => {
  const search = "landing";

  try {
    const newsList = await getNews(search);
    res.render("index", { pageTitle: "Code test", articles: newsList });
  } catch(err) {
    // catches errors both in fetch and response.json
    console.log("rejected", err.message);
  }

  /* Using then
  const newsList = getNews(search)
    .then((data) => {
      res.render("index", { pageTitle: "Code test", articles: data });
    })
    .catch((err) => {
      console.log("rejected", err.message);
    });
    */
});
// START THE SERVER
app.listen(port, host, () => {
  console.log(`Server started at ${host} port ${port}`);
});
