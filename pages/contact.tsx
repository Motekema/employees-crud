import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-grow pt-16 pl-16">
        <SideBar />
        <div className="flex-grow p-8">
          {/* Contact Section */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Get in touch with us for any inquiries or support.
          </p>

          {/* Contact Form */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  rows={5}
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
