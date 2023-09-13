import {model } from "mongoose";
import { userSchema } from "../allSchema/userSchema";
const userModel = model("users",userSchema);
export default userModel;