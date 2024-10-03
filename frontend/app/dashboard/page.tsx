"use client";

import { useWalletStore } from "@/store/walletStore";
import DashboardMainConnected from "@/components/dashboard/dashboard-connected";
import DashboardMainNotConnected from "@/components/dashboard/dashboard-not-connected";
import Navbar from "@/components/navbar/dashboard-navbar";
import Sidebar from "@/components/navbar/sidebar";

export default function Dashboard() {
  const walletConnected = useWalletStore((state: any) => state.walletConnected);
  const signedIn = useWalletStore((state) => state.isSignedIn);

  return (
    <div className="flex flex-row bg-gray-100 h-screen">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Navbar />
        <div className="p-5 flex flex-1 flex-col">
          {walletConnected && signedIn ? (
            <DashboardMainConnected />
          ) : (
            <DashboardMainNotConnected />
          )}
        </div>
      </div>
    </div>
  );
}
