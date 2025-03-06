import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignUp() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const password = formData.get("password") as string;

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, phone, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      await signIn("credentials", { email, password, redirect: false });
      router.push("/");
    } else {
      const data = await res.json();
      setError(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Sign Up
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
