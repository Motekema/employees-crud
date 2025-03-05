import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ["Admin", "Staff"], required: true },
});

export default mongoose.models.Employee ||
  mongoose.model("Employee", EmployeeSchema);
