import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function Employees() {
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
            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full bg-white dark:bg-gray-800 border-collapse">
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
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                      John
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                      Doe
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                      john.doe@example.com
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                      123-456-7890
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                      Admin
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                      <button className="text-blue-500 hover:text-blue-700 hover:underline">
                        Edit
                      </button>
                      <button className="text-red-500 hover:text-red-700 hover:underline ml-4">
                        Delete
                      </button>
                    </td>
                  </tr>
                  {/* Add more employee records as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
