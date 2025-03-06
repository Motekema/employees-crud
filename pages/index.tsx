import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-grow pt-16 pl-16">
        <SideBar />
        <div className="flex-grow p-8">
          {/* Welcome Section */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Employee Management System
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            This is a simple CRUD application built with Next.js and MongoDB to
            manage employee records.
          </p>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                📌 Manage Employees
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Easily create, update, and delete employee records with a
                user-friendly interface.
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                🔒 Secure Authentication
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Sign up and log in securely using NextAuth.js. Only authorized
                users can manage records.
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                📊 Responsive Dashboard
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                View all employee records in a well-structured, mobile-friendly
                layout.
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                🚀 Fast & Scalable
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Built with Next.js for high performance and optimized
                server-side rendering.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <Link href="/employees">
              <a className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                View Employees
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
