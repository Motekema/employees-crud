import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import Employee from "../../models/Employee";

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) return;

  const mongoUri = process.env.MONGODB_URI as string;
  if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined");
  }
  return mongoose.connect(mongoUri);
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDatabase();

    if (req.method === "POST") {
      console.log("Request body:", req.body);

      const { firstName, lastName, email, phone, role } = req.body;

      if (!firstName || !lastName || !email || !phone || !role) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const newEmployee = new Employee({
        firstName,
        lastName,
        email,
        phone,
        role,
      });

      await newEmployee.save();
      console.log("New employee created:", newEmployee);
      return res.status(201).json({ data: newEmployee });
    } else if (req.method === "GET") {
      const employees = await Employee.find({});
      console.log("Fetched employees:", employees);
      return res.status(200).json({ data: employees });
    } else if (req.method === "PUT") {
      const { _id, firstName, lastName, email, phone, role } = req.body;

      if (!_id || !firstName || !lastName || !email || !phone || !role) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      console.log("Updating employee with ID:", _id);

      const updatedEmployee = await Employee.findByIdAndUpdate(
        _id,
        { firstName, lastName, email, phone, role },
        { new: true }
      );

      if (!updatedEmployee) {
        console.error("Employee not found with ID:", _id);
        return res.status(404).json({ error: "Employee not found" });
      }

      console.log("Updated employee:", updatedEmployee);
      return res.status(200).json({ data: updatedEmployee });
    } else if (req.method === "DELETE") {
      const { _id } = req.body;

      if (!_id) {
        return res.status(400).json({ error: "Missing employee ID" });
      }

      console.log("Deleting employee with ID:", _id);

      const deletedEmployee = await Employee.findByIdAndDelete(_id);

      if (!deletedEmployee) {
        console.error("Employee not found with ID:", _id);
        return res.status(404).json({ error: "Employee not found" });
      }

      console.log("Deleted employee:", deletedEmployee);
      return res.status(200).json({ data: deletedEmployee });
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default handler;
