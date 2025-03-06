import { useState } from "react";
import { Employee } from "../types/Employee"; // Import Employee type
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CreateEmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (employee: Employee) => void;
}

export default function CreateEmployeeModal({
  isOpen,
  onClose,
  onSave,
}: CreateEmployeeModalProps) {
  const [employee, setEmployee] = useState<Omit<Employee, "_id">>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "Staff",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const newEmployee: Employee = {
        ...employee,
        _id: Date.now().toString(), // Generate a temporary unique identifier
      };

      const response = await fetch("/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });

      if (!response.ok) {
        throw new Error("Failed to save employee");
      }

      const data = await response.json();
      onSave(data.data);
      onClose();
      toast.success("Employee saved successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save employee");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <ToastContainer />
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Add New Employee
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              name="firstName" // Ensure the name matches the expected key
              placeholder="First Name"
              value={employee.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="text"
              name="lastName" // Ensure the name matches the expected key
              placeholder="Last Name"
              value={employee.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={employee.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={employee.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <select
              name="role"
              value={employee.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="Staff" className="text-black">
                Staff
              </option>
              <option value="Admin" className="text-black">
                Admin
              </option>
            </select>
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
