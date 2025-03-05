import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-grow pt-16 pl-16">
        <SideBar />
        <div className="flex-grow p-8">
          {/* Services Section */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Explore the range of services we offer to help your business grow.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                🛠️ Custom Solutions
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Tailored solutions to meet your specific business needs.
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                📈 Business Analytics
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Data-driven insights to help you make informed decisions.
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                🌐 Web Development
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Build modern, responsive, and scalable web applications.
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                🔒 Security Consulting
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Protect your business with our expert security solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
