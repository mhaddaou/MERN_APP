import {model} from "mongoose";
import adminSchema from "../allSchema/adminSchema";
const adminModel = model("admins",adminSchema);
export default adminModel;