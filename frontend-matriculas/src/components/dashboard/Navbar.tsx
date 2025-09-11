import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm p-4 flex items-center justify-between">
      <div className="flex items-center">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold ml-4">Dashboard</h1>
      </div>
      {/* Add other navbar items here if needed */}
      <div>
        {/* User profile or other icons */}
      </div>
    </nav>
  );
};

export default Navbar;
