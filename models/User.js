import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
  },
  { timestamps: {} }
);

// rename createdAt
// { timestamps: { createdAt: "created_at" } }

export default mongoose.model("user", userSchema);
