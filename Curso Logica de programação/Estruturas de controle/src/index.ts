import dotenv from "dotenv";

import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
