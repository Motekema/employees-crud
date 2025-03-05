import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar"; // Import the NavBar component

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar /> {/* Include the NavBar component */}
      <div className="flex pt-16 pl-16">
        {" "}
        {/* Add pl-16 to account for the fixed SideBar */}
        <SideBar /> {/* Include the SideBar component */}
        <div className="flex-grow p-8"></div>
      </div>
    </div>
  );
}
