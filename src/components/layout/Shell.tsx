import React, { useState } from "react";
import { useLocation } from "react-router";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import Footer from "./Footer";

interface ShellProps {
  children: React.ReactNode;
}

export default function Shell({ children }: ShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // The sidebar is active for the playground workspace (/home, /category/*, /playground/*)
  const isPlaygroundWorkspace =
    location.pathname.startsWith("/home") ||
    location.pathname.startsWith("/category") ||
    location.pathname.startsWith("/playground");

  return (
    <div className="flex min-h-screen bg-main text-txt-main font-poppins transition-colors">
      {isPlaygroundWorkspace && (
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      )}
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <TopNav
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          showSidebarToggle={isPlaygroundWorkspace}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-6xl w-full mx-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
