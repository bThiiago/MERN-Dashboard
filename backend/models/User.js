import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 255,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 255,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
