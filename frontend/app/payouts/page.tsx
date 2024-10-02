"use client";

import React from 'react';
import { useWalletStore } from "@/store/walletStore";
import Navbar from "@/components/navbar/dashboard-navbar";
import Sidebar from "@/components/navbar/sidebar";
import OreBalanceCard from "@/components/cards/ore-balance-card";
import DashboardMainNotConnected from '@/components/dashboard/dashboard-not-connected';

const PayoutsConnected: React.FC = () => {
  return (
    <div className="flex flex-col w-full justify-start p-5">
      <OreBalanceCard balance={100} />
      {/* Add more payout-related components here */}
    </div>
  );
};

const Payouts: React.FC = () => {
  const walletConnected = useWalletStore((state: any) => state.walletConnected);

  return (
    <div className="flex flex-row bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Navbar />
        <div className="flex flex-1 flex-col p-5">
          {walletConnected ? <PayoutsConnected /> : <DashboardMainNotConnected />}
        </div>
      </div>
    </div>
  );
};

export default Payouts;

