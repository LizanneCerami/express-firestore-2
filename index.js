import express from "express";
import cors from "cors";

// import CRUD functions
import { addNewTv,getAllTv } from "./src/tvLibrary.js";

const PORT = 3016;

const app = express();
app.use(cors());
app.use(express.json());

// get all TV shows
app.get('/tvShows', getAllTv);
// add TV shows
app.post('tvShows', addNewTv);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
