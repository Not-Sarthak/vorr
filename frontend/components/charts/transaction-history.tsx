import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

type Transaction = {
  id: string;
  date: string;
  type: string;
  amount: number;
  status: string;
};

type TransactionHistoryTableProps = {
  transactions: Transaction[];
};

const TransactionHistoryTable: React.FC<TransactionHistoryTableProps> = ({ transactions }) => {
  const [sortColumn, setSortColumn] = React.useState<keyof Transaction>('date');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('desc');

  const sortedTransactions = React.useMemo(() => {
    return [...transactions].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [transactions, sortColumn, sortDirection]);

  const handleSort = (column: keyof Transaction) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const renderSortIcon = (column: keyof Transaction) => {
    if (column !== sortColumn) return null;
    return sortDirection === 'asc' ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />;
  };

  const getStatusColor = (status: string) => {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus.includes('complete') || lowerStatus.includes('success')) return 'bg-green-100 text-green-800';
    if (lowerStatus.includes('pending') || lowerStatus.includes('process')) return 'bg-yellow-100 text-yellow-800';
    if (lowerStatus.includes('fail') || lowerStatus.includes('error')) return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800'; // default color
  };

  return (
    <div className="w-full overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="w-full table-auto">
        <thead className="bg-gray-50">
          <tr>
            {['Date', 'Type', 'Amount', 'Status'].map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort(header.toLowerCase() as keyof Transaction)}
              >
                <div className="flex items-center">
                  {header}
                  {renderSortIcon(header.toLowerCase() as keyof Transaction)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedTransactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${transaction.amount.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(transaction.status)}`}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistoryTable;