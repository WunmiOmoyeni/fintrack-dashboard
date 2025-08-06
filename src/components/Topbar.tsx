// components/Topbar.tsx

import React from 'react';
import { Share, MoreHorizontal } from 'lucide-react';

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

const Topbar: React.FC<TopbarProps> = ({ users, otherUsersCount, activeTab, setActiveTab }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 mb-5 z-50">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <h1 className="text-2xl font-semibold text-gray-900">Wallet Ledger</h1>
            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
              Active
            </span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="flex -space-x-2">
              {users.map((user, index) => (
                <div
                  key={user.id}
                  className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"
                  style={{ zIndex: users.length - index }}
                  title={user.name}
                />
              ))}
            </div>
            <span>
              {users.map((u) => u.name).join(', ')}
              {otherUsersCount > 0 && ` • ${otherUsersCount.toString().padStart(2, '0')} Others`}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-4 lg:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 flex items-center space-x-2">
            <Share size={16} />
            <span>Share</span>
          </button>
          <button className="border border-gray-300 text-gray-600 px-3 py-2 rounded-md hover:bg-gray-50">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2.5 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'overview'
                ? 'border-blue-500 text-gray-900'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`py-2.5 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'transactions'
                ? 'border-blue-500 text-gray-900'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
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
