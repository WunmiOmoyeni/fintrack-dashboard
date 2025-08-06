// src/data/mockData.ts
import { Transaction, DashboardSummary } from "@/types";

export const transactions: Transaction[] = [
    {
        id: "1",
        date: "2023-10-01",
        remark: "Salary",
        amount: 3000,
        currency: "USD",
        type: "Credit",    
    },
    {
        id: "2",
        date: "2023-10-02",
        remark: "Groceries",
        amount: 150,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "3",
        date: "2023-10-03",
        remark: "Gym Membership",
        amount: 50,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "4",
        date: "2023-10-04",
        remark: "Dinner",
        amount: 40,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "5",
        date: "2023-10-05",
        remark: "Movie Tickets",
        amount: 30,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "6",
        date: "2023-10-06",
        remark: "Rent",
        amount: 1200,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "7",
        date: "2023-10-07",
        remark: "Utilities",
        amount: 100,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "8",
        date: "2023-10-08",
        remark: "Car Payment",
        amount: 400,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "9",
        date: "2023-10-09",
        remark: "Insurance",
        amount: 200,
        currency: "USD",
        type: "Debit",
    },
    // Previous month data for comparison (September 2023)
    {
        id: "10",
        date: "2023-09-01",
        remark: "Previous Salary",
        amount: 2800,
        currency: "USD",
        type: "Credit",
    },
    {
        id: "11",
        date: "2023-09-15",
        remark: "Previous Groceries",
        amount: 200,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "12",
        date: "2023-09-20",
        remark: "Previous Rent",
        amount: 1200,
        currency: "USD",
        type: "Debit",
    },
    {
        id: "13",
        date: "2023-09-25",
        remark: "Previous Utilities",
        amount: 120,
        currency: "USD",
        type: "Debit",
    },
];

export const calculateDashboardSummary = (
    transactions: Transaction[],
    currentPeriodStart: string,
    previousPeriodStart: string,
    previousPeriodEnd: string
): DashboardSummary => {
    // Current period transactions
    const currentTransactions = transactions.filter(t => t.date >= currentPeriodStart);
    
    // Previous period transactions
    const previousTransactions = transactions.filter(t => 
        t.date >= previousPeriodStart && t.date <= previousPeriodEnd
    );

    // Calculate current period
    const currentCredits = currentTransactions
        .filter(t => t.type === "Credit")
        .reduce((sum, t) => sum + t.amount, 0);
    
    const currentDebits = currentTransactions
        .filter(t => t.type === "Debit")
        .reduce((sum, t) => sum + t.amount, 0);

    // Calculate previous period
    const previousCredits = previousTransactions
        .filter(t => t.type === "Credit")
        .reduce((sum, t) => sum + t.amount, 0);
    
    const previousDebits = previousTransactions
        .filter(t => t.type === "Debit")
        .reduce((sum, t) => sum + t.amount, 0);

    const currentBalance = currentCredits - currentDebits;
    const previousBalance = previousCredits - previousDebits;

    // Helper function to calculate percentage change
    const calculateChange = (current: number, previous: number): number => {
        if (previous === 0) return current > 0 ? 100 : 0;
        return parseFloat(((current - previous) / previous * 100).toFixed(1));
    };

    return {
        totalBalance: currentBalance,
        totalCredits: currentCredits,
        totalDebits: currentDebits,
        transactionCount: currentTransactions.length,
        balanceChange: calculateChange(currentBalance, previousBalance),
        creditsChange: calculateChange(currentCredits, previousCredits),
        debitsChange: calculateChange(currentDebits, previousDebits),
        transactionChange: calculateChange(currentTransactions.length, previousTransactions.length),
    };
};