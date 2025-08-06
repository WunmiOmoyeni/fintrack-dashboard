// src/app/dashboard/page.tsx
"use client";

import { useState } from "react";
import Topbar from "@/components/Topbar";
import { calculateDashboardSummary, transactions } from "@/data/mockData";
import SummaryCard from "@/components/SummaryCard";
import TransactionTable from "@/components/TransactionTable";
import Link from "next/link";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const users = [
    { id: 1, name: "Jane" },
    { id: 2, name: "John" },
    // ...
  ];
  const otherUsersCount = 5;

  const dashboardSummary = calculateDashboardSummary(
    transactions,
    "2023-10-01",
    "2023-09-01",
    "2023-09-30"
  );

  return (
    <main className=" space-y-6">
      {/* 🟡 Topbar from WalletPage */}
      <Topbar
        users={users}
        otherUsersCount={otherUsersCount}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* 🔵 Dashboard Content */}
      <h1 className="text-2xl font-semibold">Summary</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          title="Total Balance"
          value={dashboardSummary.totalBalance}
          change={dashboardSummary.balanceChange}
        />
        <SummaryCard
          title="Total Credits"
          value={dashboardSummary.totalCredits}
          change={dashboardSummary.creditsChange}
        />
        <SummaryCard
          title="Total Debits"
          value={dashboardSummary.totalDebits}
          change={dashboardSummary.debitsChange}
        />
        <SummaryCard
          title="Transactions"
          value={dashboardSummary.transactionCount}
          change={dashboardSummary.transactionChange}
          isMonetary={false}
        />
      </div>

      <Link href="/transactions">
        <TransactionTable transactions={transactions} />
      </Link>
    </main>
  );
}
