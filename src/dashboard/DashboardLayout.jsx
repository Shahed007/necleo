import { Outlet } from "react-router-dom";
import Navbar from "./pages/shared/navbar/Navbar";
import SideNavbar from "./pages/shared/sideNav/SideNavbar";
import { useState } from "react";

const DashboardLayout = () => {
  const [collapse, setCollapse] = useState(true);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <>
      <header className="bg-white border-b border-b-gray-100 overflow-x-hidden ">
        <Navbar handleCollapse={handleCollapse}></Navbar>
        <SideNavbar handleCollapse={handleCollapse} collapse={collapse} />
      </header>
      <main className="flex flex-col lg:flex-row md:h-[89vh] overflow-y-auto overflow-x-hidden">
        <aside
          className={`lg:block hidden ${
            collapse ? "w-1/5" : "w-0"
          } duration-200 ease-in-out transition-all overflow-y-auto`}
        ></aside>
        <section className="bg-[#F8F8F8] flex-1 h-auto overflow-y-auto">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default DashboardLayout;
