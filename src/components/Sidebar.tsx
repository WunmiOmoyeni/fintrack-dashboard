"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", path: "/" },
  { label: "Transactions", path: "/transactions" },
  { label: "Reports", path: "#" },
  { label: "Settings", path: "#" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white h-screen py-4 px-12 hidden md:block">
      <nav className="">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.path}
            className={`block px-4 py-2 rounded-[70px] hover:bg-gray-100 hover:text-[#3A6C7B] transition-colors ${
              pathname === item.path
                ? "bg-gray-100 font-medium text-[#3A6C7B]"
                : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
