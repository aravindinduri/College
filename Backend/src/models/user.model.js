import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
   username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      index: true
   },
   email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
   },
   avatar: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: [true, "password is required"],
   },
   reviews:{
      type : String,

   },
   refreshToken: {
      type: String,
   },
},
   {
      timestamps: true
   }
)

export const User = mongoose.model("User", UserSchema)
