import express from "express";
import cors from "cors";

const app = express();

const PORT = 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use(express.json());

app.post("/payment-service", async (req, res) => {
  const { cart } = req.body;
  // TODO: ASSUME THAT WE GET COOKIE AND DECRYPT THE USER ID
  const userId = "123";

  // TODO: PAYMENT
  console.log("API endpoint hit!!");

  // KAFKA
  return res.status(200).send("Payment Successfull!!");
});

app.use((err, req, res, next) => {
  res.send(err.status || 500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Payment service is running on port ${PORT}`);
});
