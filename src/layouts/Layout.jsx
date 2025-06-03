import { useState } from "react";
import Header from "./Header";
import ResponsiveSidebar from "./ResponsiveSidebar.jsx";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [responsiveBar, setResponsiveBar] = useState(false);

  return (
    <div className="w-full h-full lg:flex relative">
      <Sidebar />
      {responsiveBar && (
        <div className="absolute w-[13rem] h-full lg:hidden">
          <ResponsiveSidebar
            responsiveBar={responsiveBar}
            setResponsiveBar={setResponsiveBar}
          />
        </div>
      )}
      <div className="flex flex-col lg:flex-1 lg:w-0 w-full h-full">
        <Header
          responsiveBar={responsiveBar}
          setResponsiveBar={setResponsiveBar}
        />
        <div className="w-full overflow-y-auto px-5 py-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
