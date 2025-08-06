"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", path: "/" },
  { label: "Transactions", path: "/#transactions" },
  { label: "Reports", path: "#" },
  { label: "Settings", path: "#" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (item: typeof navItems[0]) => {
    if (item.path === "/" && pathname === "/") {
      return true;
    }
    if (item.path === "/dashboard#transactions" && pathname === "/dashboard") {
      return true;
    }
    return pathname === item.path && item.path !== "#";
  };

  return (
    <aside className="w-[300px] bg-white h-screen py-4 px-12 hidden md:block">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.path}
            className={`block px-4 py-2 rounded-[70px] text-[15px] hover:bg-gray-300 hover:text-[#3A6C7b] transition-colors ${
              isActive(item)
                ? "bg-gray-100 font-medium  text-[#3A6C7B]"
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