import React from "react";
import Image from "next/image";
import logo from "../images/logo for Employee Management.png"; // Import the new logo image
import { signOut, useSession } from "next-auth/react";
import Link from "next/link"; // Add this import

const NavBar: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full h-16 flex items-center justify-between bg-gray-900 text-white px-4 fixed top-0 z-10">
      <div className="flex items-center">
        <Image
          src={logo}
          alt="Logo"
          width={40}
          height={40}
          className="border-2 border-white rounded-full" // Add border and rounded styles
        />
        <span className="ml-2 text-xl font-bold">Employee's Nav</span>
      </div>
      <div className="flex items-center">
        <Image
          src="/images/user-avatar.svg"
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full hover:opacity-80"
        />
        <span className="ml-2 mr-4">Logged in as: User</span>
        {session ? (
          <button
            onClick={() => signOut()}
            className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Log Out
          </button>
        ) : (
          <Link
            href="/auth/signin"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
