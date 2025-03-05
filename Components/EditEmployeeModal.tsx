import { useState, useEffect } from "react";

interface EditEmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  employee: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
  };
  onSave: (updatedEmployee: any) => void;
}

export default function EditEmployeeModal({
  isOpen,
  onClose,
  employee,
  onSave,
}: EditEmployeeModalProps) {
  const [updatedEmployee, setUpdatedEmployee] = useState(employee);

  useEffect(() => {
    setUpdatedEmployee(employee);
  }, [employee]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      console.log("Saving updated employee:", updatedEmployee);

      const response = await fetch("/api/employees", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEmployee),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to update employee:", errorText);
        throw new Error("Failed to update employee");
      }

      const data = await response.json();
      console.log("Updated employee data:", data);
      onSave(data.data);
      onClose();
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Edit Employee
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            name="firstName"
            value={updatedEmployee.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded"
            placeholder="FirstName"
          />
          <input
            type="text"
            name="lastName"
            value={updatedEmployee.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded"
            placeholder="LastName"
          />
          <input
            type="email"
            name="email"
            value={updatedEmployee.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded"
            placeholder="Email"
          />
          <input
            type="tel"
            name="phone"
            value={updatedEmployee.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded"
            placeholder="Phone"
          />
          <select
            name="role"
            value={updatedEmployee.role}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded"
          >
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>
          </select>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
