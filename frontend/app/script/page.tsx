"use client";

import React from 'react';
import { useWalletStore } from "@/store/walletStore";
import Navbar from "@/components/navbar/dashboard-navbar";
import Sidebar from "@/components/navbar/sidebar";
import OreBalanceCard from "@/components/cards/ore-balance-card";
import DashboardMainNotConnected from '@/components/dashboard/dashboard-not-connected';
import CodeSnippet from '@/components/code/code-snippet';

const ScriptsConnected: React.FC = () => {
  return (
    <div className="flex flex-col w-full justify-start p-5 bg-white min-h-screen rounded-md">
        <div className='flex flex-col gap-4'>
        <div className='text-2xl font-instrument'>🛠️ Let's Start Building!</div>
        <div className='border-b-[1px] border-black/70 w-1/2' />
        <div className='font-instrument'>The steps will go here!</div>
      <div><CodeSnippet /></div>
      </div>
    </div>
  );
};

const Scripts: React.FC = () => {
  const walletConnected = useWalletStore((state: any) => state.walletConnected);

  return (
    <div className="flex flex-row bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Navbar />
        <div className="flex flex-1 flex-col p-5">
          {walletConnected ? <ScriptsConnected /> : <DashboardMainNotConnected />}
        </div>
      </div>
    </div>
  );
};

export default Scripts;

