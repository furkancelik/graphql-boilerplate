import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
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

userSchema.pre("save", function(next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10).then(hash => {
    this.password = hash;
    next();
  });
});

export default mongoose.model("user", userSchema);
