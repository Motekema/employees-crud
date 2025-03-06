import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { firstName, lastName, email, phone, password } = req.body;

  if (!firstName || !lastName || !email || !phone || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  await client.connect();
  const db = client.db("employees");
  const usersCollection = db.collection("employees");

  const existingUser = await usersCollection.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await usersCollection.insertOne({
    firstName,
    lastName,
    email,
    phone,
    password: hashedPassword,
    role: "Staff", // Set default role to "Staff"
  });

  res.status(201).json({ message: "User created" });
}
