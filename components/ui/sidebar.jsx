"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { PanelLeftIcon } from "lucide-react";

// Dummy components for illustration
const Button = ({ children, ...props }) => <button {...props}>{children}</button>;
const Input = (props) => <input {...props} />;
const Skeleton = (props) => <div className="bg-gray-300 animate-pulse" {...props}></div>;
const Sheet = ({ open, onOpenChange, children }) => (open ? <div>{children}</div> : null);
const SheetContent = ({ children, className, ...props }) => <div className={className} {...props}>{children}</div>;
const SheetHeader = ({ children, className }) => <div className={className}>{children}</div>;
const SheetTitle = ({ children }) => <h2>{children}</h2>;
const SheetDescription = ({ children }) => <p>{children}</p>;
const TooltipProvider = ({ children }) => <>{children}</>;

// Sidebar context
const SidebarContext = createContext(null);
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within SidebarProvider");
  return context;
};

// Sidebar Provider
export const SidebarProvider = ({ children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  const [openMobile, setOpenMobile] = useState(false);
  const state = open ? "expanded" : "collapsed";

  const toggleSidebar = useCallback(() => setOpen((o) => !o), []);

  const contextValue = useMemo(
    () => ({ open, setOpen, toggleSidebar, openMobile, setOpenMobile, state }),
    [open, toggleSidebar, openMobile]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider>{children}</TooltipProvider>
    </SidebarContext.Provider>
  );
};

// Sidebar Trigger
export const SidebarTrigger = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <Button
      onClick={toggleSidebar}
      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      <PanelLeftIcon />
    </Button>
  );
};

// Sidebar
export const Sidebar = ({ children }) => {
  const { open } = useSidebar();

  return (
    <aside
      className={`bg-gray-100 dark:bg-gray-900 transition-all duration-300 ease-linear h-screen ${
        open ? "w-64" : "w-16"
      } flex flex-col`}
    >
      {children}
    </aside>
  );
};

// Sidebar Header
export const SidebarHeader = ({ children }) => (
  <div className="p-4 border-b border-gray-300 dark:border-gray-700 font-semibold">{children}</div>
);

// Sidebar Footer
export const SidebarFooter = ({ children }) => (
  <div className="p-4 border-t border-gray-300 dark:border-gray-700 mt-auto">{children}</div>
);

// Sidebar Input
export const SidebarInput = (props) => (
  <Input
    {...props}
    className="m-2 p-2 w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
  />
);

// Sidebar Content
export const SidebarContent = ({ children }) => <div className="flex-1 overflow-auto p-2">{children}</div>;

// Sidebar Menu
export const SidebarMenu = ({ children }) => <ul className="flex flex-col gap-1">{children}</ul>;

// Sidebar Menu Item
export const SidebarMenuItem = ({ children }) => (
  <li className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">{children}</li>
);

// Sidebar Skeleton (for loading state)
export const SidebarMenuSkeleton = ({ showIcon = true }) => (
  <div className="flex items-center gap-2 p-2">
    {showIcon && <Skeleton className="w-4 h-4 rounded" />}
    <Skeleton className="h-4 flex-1 rounded" />
  </div>
);

// Example usage
export default function App() {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar>
          <SidebarHeader>Menu</SidebarHeader>
          <SidebarContent>
            <SidebarInput placeholder="Search..." />
            <SidebarMenu>
              <SidebarMenuItem>Dashboard</SidebarMenuItem>
              <SidebarMenuItem>Settings</SidebarMenuItem>
              <SidebarMenuItem>Profile</SidebarMenuItem>
              <SidebarMenuSkeleton />
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>© 2025 Your Company</SidebarFooter>
        </Sidebar>
        <main className="flex-1 p-4">
          <SidebarTrigger />
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p className="mt-4">This is a responsive sidebar layout with Tailwind CSS.</p>
        </main>
      </div>
    </SidebarProvider>
  );
}
