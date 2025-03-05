import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faWrench,
  faUsers,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const SideBar: React.FC = () => {
  return (
    <div className="h-screen w-16 flex flex-col items-center bg-gray-900 text-white pt-6 fixed top-16 left-0">
      <a href="#home" className="my-4 hover:text-gray-400">
        <FontAwesomeIcon
          icon={faHome}
          className="text-2xl hover:scale-110 transition-transform duration-200"
        />
      </a>
      <a href="#services" className="my-4 hover:text-gray-400">
        <FontAwesomeIcon
          icon={faWrench}
          className="text-2xl hover:scale-110 transition-transform duration-200"
        />
      </a>
      <a href="#employees" className="my-4 hover:text-gray-400">
        <FontAwesomeIcon
          icon={faUsers}
          className="text-2xl hover:scale-110 transition-transform duration-200"
        />
      </a>
      <a href="#contact" className="my-4 hover:text-gray-400">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-2xl hover:scale-110 transition-transform duration-200"
        />
      </a>
    </div>
  );
};

export default SideBar;
