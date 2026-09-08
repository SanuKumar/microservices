import express from "express";
import cors from "cors";

const app = express();

const PORT = 8000;

app.use(
  cors({
    origin: "http//localhost:3000",
  }),
);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Payment service is running on port ${PORT}`);
});
