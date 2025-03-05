import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import Employee from "../../models/Employee";

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(process.env.MONGODB_URI);
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDatabase();

    if (req.method === "POST") {
      console.log("Request body:", req.body); // Add this line to log the request body

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
      return res.status(201).json({ data: newEmployee });
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
