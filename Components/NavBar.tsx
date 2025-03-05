import React from "react";
import Image from "next/image";

const NavBar: React.FC = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between bg-gray-800 text-white px-4 fixed top-0 z-10">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <span className="ml-2 text-xl font-bold">MyApp</span>
      </div>
      <div className="flex items-center">
        <Image
          src="/user-avatar.svg"
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="mr-4">Logged in as: User</span>
      </div>
    </div>
  );
};

export default NavBar;
