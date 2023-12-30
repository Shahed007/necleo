import { Outlet } from "react-router-dom";
import Navbar from "./pages/shared/navbar/Navbar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <aside></aside>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default DashboardLayout;
