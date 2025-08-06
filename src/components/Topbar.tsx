// components/Topbar.tsx

import React from "react";
import { Share, MoreHorizontal, ChevronDown } from "lucide-react";
import UserAvatarGroup from "./UserAvatarGroup";

interface User {
  id: number;
  name: string;
}

interface TopbarProps {
  users: User[];
  otherUsersCount: number;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const sampleUsers = [
  { id: 1, name: "Alice" },
  { id: 3, name: "Carol" },
  { id: 4, name: "David" },
  { id: 5, name: "Eva" },
  { id: 6, name: "Frank" },
  { id: 7, name: "Grace" },
];

const Topbar: React.FC<TopbarProps> = ({
  users,
  otherUsersCount,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className=" p-5 mb-5 z-50">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
        <div>
          <div className="flex items-center space-x-4 mb-4">
            {/* Title */}
            <h1 className="text-[34px] font-[publicSans-Bold] text-gray-900">
              Wallet Ledger
            </h1>

            {/* Icons */}
            <div className="flex space-x-1">
              <ChevronDown />
            </div>

            {/* Status Badge */}

            <span className="bg-gray-100 px-2 py-1 rounded text-xs font-[publicSans-Medium] flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Active
            </span>
          </div>

          <UserAvatarGroup
            users={sampleUsers}
            maxVisible={3} // Show 6 avatars before +count
            size="md"
            showNames={true}
          />
        </div>

        <div className="flex items-center space-x-2 mt-6 lg:md-0">
          <button className="bg-[#4B8B9F] px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 flex items-center space-x-2">
            <span className="font-[publicSans-Medium]">Share</span>
          </button>
          <button className="border border-gray-300 text-gray-600 px-3 py-2 rounded-md hover:bg-gray-50">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mt-8">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-2.5 px-1 border-b-2 font-[publicSans-Medium] text-[15px] ${
              activeTab === "overview"
                ? "border-blue-500 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("transactions")}
            className={`py-2.5 px-1 border-b-2 font-[publicSans-Medium] text-[15px] transition-colors ${
              activeTab === "transactions"
                ? "border-[#3A6C7B] text-[#3A6C7B]"
                : "border-transparent text-gray-500 hover:text-[#3A6C7B] hover:border-gray-300"
            }`}
          >
            Transactions
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;
