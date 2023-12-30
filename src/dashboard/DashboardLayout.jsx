import { Outlet } from "react-router-dom";
import Navbar from "./pages/shared/navbar/Navbar";

const DashboardLayout = () => {
  return (
    <>
      <header className="bg-white border-b border-b-gray-300">
        <Navbar></Navbar>
      </header>
      <main>
        <aside>SideNav</aside>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default DashboardLayout;
