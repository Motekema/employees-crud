import mongoose, { Schema, Document } from "mongoose";

interface IEmployee extends Document {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  role: string;
}

const EmployeeSchema: Schema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
});

export default mongoose.models.Employee ||
  mongoose.model<IEmployee>("Employee", EmployeeSchema);
