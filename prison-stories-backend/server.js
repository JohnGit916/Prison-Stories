import express from "express";
import cors from "cors";
import storiesRouter from "./routes/stories.js";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.use("/api/stories", storiesRouter);

app.get("/", (req, res) => {
  res.send("Prison Stories API is running");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
