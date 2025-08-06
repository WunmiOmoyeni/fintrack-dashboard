"use client";

import { useState } from "react";
import { Transaction } from "@/types";

interface Props {
  transactions: Transaction[];
}

type SortField = "date" | "remark" | "amount" | "type";
type SortDirection = "asc" | "desc";

const TransactionTable = ({ transactions }: Props) => {
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    let aValue: string | number;
    let bValue: string | number;

    switch (sortField) {
      case "date":
        aValue = new Date(a.date).getTime();
        bValue = new Date(b.date).getTime();
        break;
      case "amount":
        aValue = a.amount;
        bValue = b.amount;
        break;
      case "remark":
        aValue = a.remark.toLowerCase();
        bValue = b.remark.toLowerCase();
        break;
      case "type":
        aValue = a.type;
        bValue = b.type;
        break;
      default:
        aValue = a.date;
        bValue = b.date;
    }

    if (aValue < bValue) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const formatAmount = (amount: number, type: string) => {
    const sign = type === "Debit" ? "-" : "";
    return `${sign}$${amount.toLocaleString()}`;
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) {
      return <span className="text-gray-300">↕</span>;
    }
    return (
      <span className="text-blue-600">
        {sortDirection === "asc" ? "↑" : "↓"}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer hover:bg-gray-100 w-1/3"
                onClick={() => handleSort("date")}
              >
                <div className="flex items-center space-x-1">
                  <span className="font-[publicSans-Medium] text-[13px] ">Date</span>
                  <SortIcon field="date" />
                </div>
              </th>
              
              {/* Spacer column to push other columns to the right */}
              <th className="w-1/6"></th>
              
              {/* Right-aligned columns bunched together */}
              <th
                className="px-3 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer hover:bg-gray-100 w-1/6"
                onClick={() => handleSort("remark")}
              >
                <div className="flex items-center space-x-1">
                  <span className=" font-[publicSans-Medium] text-[13px] capitalize">Remark</span>
                  <SortIcon field="remark" />
                </div>
              </th>
              <th
                className="px-3 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer hover:bg-gray-100 w-1/6"
                onClick={() => handleSort("amount")}
              >
                <div className="flex items-center space-x-1">
                  <span className=" font-[publicSans-Medium] text-[13px] capitalize">Amount</span>
                  <SortIcon field="amount" />
                </div>
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 e tracking-wider w-1/12  font-[publicSans-Medium] text-[13px] ">
                Currency
              </th>
              <th
                className="px-3 py-3 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer hover:bg-gray-100 w-1/6"
                onClick={() => handleSort("type")}
              >
                <div className="flex items-center space-x-1">
                  <span className=" font-[publicSans-Medium] text-[13px]">Type</span>
                  <SortIcon field="type" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedTransactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                {/* Date cell */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-[publicSans-Regular] text-[15px]">
                  {formatDate(transaction.date)}
                </td>
                
                {/* Empty spacer cell */}
                <td className="px-3 py-4"></td>
                
                {/* Right-aligned cells */}
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900 font-[publicSans-Regular] text-[15px]">
                  {transaction.remark}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm font-[publicSans-Regular] text-[15px]">
                  <span>
                    {formatAmount(transaction.amount, transaction.type)}
                  </span>
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-[#1B2528] font-[publicSans-Regular] text-[15px]">
                  {transaction.currency}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex items-center space-x-2 px-2 py-1 rounded-full bg-gray-100 border border-gray-300 w-fit">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        transaction.type === "Credit"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <span className="text-sm font-medium text-[#1B2528] font-[publicSans-Regular] text-[15px]">
                      {transaction.type}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;