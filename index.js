const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const express = require("express");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome To Crowdfunding Platform",
    status: 200,
    success: true,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
