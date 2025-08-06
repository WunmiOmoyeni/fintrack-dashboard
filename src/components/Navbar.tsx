"use client";

import { useState } from "react";
import {
  Menu,
  Search,
  Grid3X3,
  X,
  Home,
  BarChart3,
  CreditCard,
  Settings,
  LogOut,
} from "lucide-react";
import logo from "@/images/logo.png";
import menu from "@/images/menu.png";
import person from "@/images/A professional-looking individual with short dark hair and glasses smiling in a modern office setting..png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Transactions", path: "/#transactions" },
    { label: "Reports", path: "#" },
    { label: "Settings", path: "#" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0  h-16 z-50">
        <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-14">
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Mobile hamburger */}
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-md lg:hidden transition-colors duration-200"
            >
              <Menu size={20} className="text-gray-600" />
            </button>

            {/* Logo section */}
            <div className="flex items-center space-x-2">
              <Image src={logo} alt="logo" className="h-8 w-auto sm:h-10" />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex justify-center items-center space-x-3">
            <button className="p-4 hover:bg-gray-100 rounded-md text-gray-600 transition-colors duration-200">
              <Search size={22} className="w-6 h-6" />
            </button>
            <button className="p-4 hover:bg-gray-100 rounded-md text-gray-600 transition-colors duration-200">
              <Grid3X3 size={22} className="w-6 h-6" />
            </button>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
              <Image
                src={person}
                alt="person"
                className="w-full h-full object-cover"
                width={48}
                height={48}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="logo" className="h-8 w-auto" width={32} />
          </div>
          <button
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.path}
                  onClick={closeSidebar}
                  className="block p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700 hover:text-gray-900 font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
