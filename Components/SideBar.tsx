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
    <div className="h-screen w-16 flex flex-col items-center bg-gray-900 text-white pt-6 fixed">
      {" "}
      {/* Added fixed */}
      <a href="#home" className="my-4">
        <FontAwesomeIcon icon={faHome} className="text-2xl" />
      </a>
      <a href="#services" className="my-4">
        <FontAwesomeIcon icon={faWrench} className="text-2xl" />
      </a>
      <a href="#clients" className="my-4">
        <FontAwesomeIcon icon={faUsers} className="text-2xl" />
      </a>
      <a href="#contact" className="my-4">
        <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
      </a>
    </div>
  );
};

export default SideBar;
