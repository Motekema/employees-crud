import { useState } from "react";
import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import EditEmployeeModal from "../Components/EditEmployeeModal";
import CreateEmployeeModal from "../Components/CreateEmployeeModal";

export default function Employees() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleEditClick = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsEditModalOpen(true);
  };

  const handleCreateClick = () => {
    setIsCreateModalOpen(true);
  };

  interface Employee {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    role: string;
  }

  const handleSave = (updatedEmployee: Employee) => {
    // Save the updated employee details
    console.log("Updated Employee:", updatedEmployee);
  };

  const handleCreateSave = (newEmployee: Employee) => {
    // Save the new employee details
    console.log("New Employee:", newEmployee);
  };

  const employees: Employee[] = [
    {
      firstname: "John",
      lastname: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      role: "Admin",
    },
    {
      firstname: "Jane",
      lastname: "Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      role: "Staff",
    },
    {
      firstname: "Alice",
      lastname: "Johnson",
      email: "alice.johnson@example.com",
      phone: "555-123-4567",
      role: "Admin",
    },
    {
      firstname: "Bob",
      lastname: "Brown",
      email: "bob.brown@example.com",
      phone: "444-555-6666",
      role: "Staff",
    },
    {
      firstname: "Charlie",
      lastname: "Davis",
      email: "charlie.davis@example.com",
      phone: "333-222-1111",
      role: "Admin",
    },
    {
      firstname: "David",
      lastname: "Evans",
      email: "david.evans@example.com",
      phone: "222-333-4444",
      role: "Staff",
    },
    // Add more employee records as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-grow pt-16 pl-16">
        <SideBar />
        <div className="flex-grow p-8">
          {/* Employees Section */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Employee Management
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Manage your employee records efficiently with our intuitive system.
          </p>

          {/* Employee Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                👤 Add Employees
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Easily add new employees to your database.
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                ✏️ Update Records
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Update employee information with just a few clicks.
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                🗑️ Delete Employees
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Remove employees who are no longer part of your organization.
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                📊 View Reports
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Generate and view detailed employee reports.
              </p>
            </div>
          </div>

          {/* Employee Records Table */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Employee Records
            </h2>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleCreateClick}
            >
              Add Employee
            </button>
            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-[800px] bg-white dark:bg-gray-800 border-collapse">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Firstname
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      LastName
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Email
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Phone
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Role
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                  style={{ maxHeight: "10px", overflowY: "auto" }}
                >
                  {employees.map((employee, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                        {employee.firstname}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                        {employee.lastname}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                        {employee.email}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                        {employee.phone}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                        {employee.role}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                        <button
                          className="text-blue-500 hover:underline"
                          onClick={() => handleEditClick(employee)}
                        >
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700 hover:underline ml-4">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {isEditModalOpen && selectedEmployee && (
        <EditEmployeeModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          employee={selectedEmployee}
          onSave={handleSave}
        />
      )}
      {isCreateModalOpen && (
        <CreateEmployeeModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onSave={handleCreateSave}
        />
      )}
    </div>
  );
}
