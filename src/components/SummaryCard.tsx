import { DashboardSummary } from "@/types";

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
    const sign = changeVal >= 0 ? '+' : '';
    return `${sign}${changeVal.toFixed(1)}%`;
  };

  return (
    <div className="rounded-xl shadow p-4 bg-white">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-xl font-bold">{formatValue(value)}</p>
      <p className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
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