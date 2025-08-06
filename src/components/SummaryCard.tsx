import { DashboardSummary } from "@/types";
import { MoreHorizontal } from "lucide-react";

interface Props {
  title: string;
  value: number;
  change: number;
  isMonetary?: boolean; // To handle currency formatting
}

const SummaryCard = ({ title, value, change, isMonetary = true }: Props) => {
  const formatValue = (val: number) => {
    if (isMonetary) {
      return `$${val.toLocaleString()}`;
    }
    return val.toLocaleString();
  };

  const formatChange = (changeVal: number) => {
    const sign = changeVal >= 0 ? "+" : "";
    return `${sign}${changeVal.toFixed(1)}%`;
  };

  return (
    <div className="rounded-[35px] shadow p-4 bg-gray-100 h-[150px] flex-col items-center">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-[#1B2528]">{title}</h3>
        <MoreHorizontal className="text-gray-600 cursor-pointer" />
      </div>

      <p className="font-bold text-[34px] text-[#1B2528] mb-1">
        {formatValue(value)}
      </p>
      <p
        className={`text-sm ${
          change >= 0 ? "text-[#3E7383]" : "text-[#C6381B]"
        } text-[13px]`}
      >
        {formatChange(change)}
      </p>
    </div>
  );
};

// Dashboard component showing how to use with your dashboard summary
interface DashboardProps {
  summary: DashboardSummary;
}

const Dashboard = ({ summary }: DashboardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <SummaryCard
        title="Total Balance"
        value={summary.totalBalance}
        change={summary.balanceChange}
      />
      <SummaryCard
        title="Total Credits"
        value={summary.totalCredits}
        change={summary.creditsChange}
      />
      <SummaryCard
        title="Total Debits"
        value={summary.totalDebits}
        change={summary.debitsChange}
      />
      <SummaryCard
        title="Transactions"
        value={summary.transactionCount}
        change={summary.transactionChange}
        isMonetary={false}
      />
    </div>
  );
};

export default SummaryCard;
export { Dashboard };

// Usage example:
// const summary = calculateDashboardSummary(transactions, "2025-08-01", "2025-07-01", "2025-07-31");
// <Dashboard summary={summary} />
