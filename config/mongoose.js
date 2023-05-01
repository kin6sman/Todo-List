const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0/codeial_development")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

