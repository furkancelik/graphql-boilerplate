import mongoose from "mongoose";
mongoose.connect(
  "mongodb://localhost:27017/test",
  { useNewUrlParser: true }
);
