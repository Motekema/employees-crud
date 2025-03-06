import { useState, useEffect } from "react";
import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import EditEmployeeModal from "../Components/EditEmployeeModal";
import CreateEmployeeModal from "../Components/CreateEmployeeModal";
import { Employee } from "../types/Employee"; // Import Employee type
import ConfirmationModal from "../Components/ConfirmationModal"; // Import ConfirmationModal component
import PasswordConfirmationModal from "../Components/PasswordConfirmationModal"; // Import PasswordConfirmationModal component
import { useSession } from "next-auth/react"; // Import useSession from next-auth/react

export default function Employees() {
  const { data: session } = useSession();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState<string | null>(null);
  const [isPasswordConfirmationModalOpen, setIsPasswordConfirmationModalOpen] =
    useState(false);
  const [actionType, setActionType] = useState<"edit" | "delete" | null>(null);

  const handleEditClick = (employee: Employee) => {
    setSelectedEmployee(employee);
    setActionType("edit");
    setIsPasswordConfirmationModalOpen(true);
  };

  const handleCreateClick = () => {
    setIsCreateModalOpen(true);
  };

  const handleDeleteClick = (employeeId: string) => {
    setEmployeeToDelete(employeeId);
    setActionType("delete");
    setIsPasswordConfirmationModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!employeeToDelete) {
      console.error("Employee ID is undefined");
      return;
    }
    try {
      const response = await fetch(`/api/employees`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: employeeToDelete }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to delete employee:", errorText);
        throw new Error("Failed to delete employee");
      }

      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee._id !== employeeToDelete)
      );
      setIsConfirmationModalOpen(false);
      setEmployeeToDelete(null);
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const handleSave = async (updatedEmployee: Employee) => {
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
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee._id === updatedEmployee._id ? data.data : employee
        )
      );
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handleCreateSave = (employee: Employee) => {
    // Ensure new employees have a temporary unique identifier
    const newEmployee = {
      ...employee,
      _id: employee._id || Date.now().toString(),
    };
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    setIsCreateModalOpen(false);
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("/api/employees");
        const text = await response.text();
        try {
          const data = JSON.parse(text);
          setEmployees(data.data);
        } catch (jsonError) {
          console.error("Failed to parse JSON:", jsonError);
          console.error("Response text:", text);
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  const handlePasswordConfirm = () => {
    if (actionType === "edit" && selectedEmployee) {
      setIsEditModalOpen(true);
    } else if (actionType === "delete") {
      setIsConfirmationModalOpen(true);
    }
    setIsPasswordConfirmationModalOpen(false);
  };

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
                  {employees &&
                    employees.map((employee, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                          {employee.firstName}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                          {employee.lastName}
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
                          <button
                            className="text-red-500 hover:text-red-700 hover:underline ml-4"
                            onClick={() => handleDeleteClick(employee._id!)}
                          >
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
      {isConfirmationModalOpen && (
        <ConfirmationModal
          isOpen={isConfirmationModalOpen}
          onClose={() => setIsConfirmationModalOpen(false)}
          onConfirm={confirmDelete}
          message="Are you sure you want to delete this employee?"
        />
      )}
      {isPasswordConfirmationModalOpen && (
        <PasswordConfirmationModal
          isOpen={isPasswordConfirmationModalOpen}
          onClose={() => setIsPasswordConfirmationModalOpen(false)}
          onConfirm={handlePasswordConfirm}
        />
      )}
    </div>
  );
}
