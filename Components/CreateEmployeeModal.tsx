import { useState } from "react";

interface CreateEmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (employee: Employee) => void;
}

interface Employee {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  role: string;
}

export default function CreateEmployeeModal({
  isOpen,
  onClose,
  onSave,
}: CreateEmployeeModalProps) {
  const [employee, setEmployee] = useState<Employee>({
    firstname: "",
    lastname: "",
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

  const handleSubmit = () => {
    onSave(employee);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Add New Employee
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={employee.firstname}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={employee.lastname}
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
            <option value="Staff">Staff</option>
            <option value="Admin">Admin</option>
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
  );
}
