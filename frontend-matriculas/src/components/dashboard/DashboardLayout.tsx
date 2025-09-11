import React from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Navbar from "@/components/dashboard/Navbar";
import { LayoutDashboard, Users, BookOpen } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="flex min-h-screen w-full">
        <Sidebar collapsible={isMobile ? "offcanvas" : "icon"}>
          <SidebarHeader className="p-4">
            <div className="flex items-center justify-center gap-6">
              <img
                src="img/colegio.png"
                alt="Logo Colegio"
                className="size-10 rounded-full"
              />
              <span className="text-lg font-bold">COLEGIO</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>General</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Overview" size="lg" className="[&>svg]:size-6">
                    <a href="/dashboard/overview">
                      <LayoutDashboard />
                      <span>Overview</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Alumnos" size="lg" className="[&>svg]:size-6">
                    <a href="/dashboard/alumnos">
                      <Users />
                      <span>Alumnos</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Cursos" size="lg" className="[&>svg]:size-6">
                    <a href="/dashboard/cursos">
                      <BookOpen />
                      <span>Cursos</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarSeparator />
            {/* Add any footer items here if needed */}
          </SidebarFooter>
        </Sidebar>
        {/* Main Content */}
        <div className="flex-1">
          <Navbar />
          <div className="p-4 md:p-8">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
