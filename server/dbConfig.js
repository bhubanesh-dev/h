const mongoose = require("mongoose");
// DB Connection

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to Database!"))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
