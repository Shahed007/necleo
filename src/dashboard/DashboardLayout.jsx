import { Outlet } from "react-router-dom";
import Navbar from "./pages/shared/navbar/Navbar";
import SideNavbar from "./pages/shared/sideNav/SideNavbar";

const DashboardLayout = () => {
  return (
    <>
      <header className="bg-white border-b border-b-gray-100">
        <Navbar></Navbar>
      </header>
      <main className="flex h-full">
        <aside className="w-1/5 h-full">
          <SideNavbar></SideNavbar>
        </aside>
        <section className="bg-[#F8F8F8] flex-1 h-full">
          <Outlet></Outlet>
        </section>
      </main>
    </>
  );
};

export default DashboardLayout;
