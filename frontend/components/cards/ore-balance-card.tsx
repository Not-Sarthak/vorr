import React from "react";
import { Info } from "lucide-react";
import Image from "next/image";

interface OreBalanceCardProps {
  balance: number;
}

const OreBalanceCard: React.FC<OreBalanceCardProps> = ({ balance }) => {

  return (
    <div className="bg-gradient-to-b from-[#E5DDF8]/60 to-[#FFFFFF] rounded-lg shadow-md p-4 sm:p-6 max-w-sm font-instrument">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-black/60">ORE Balance</h2>
        <button className="text-purple-600" aria-label="More information">
          <Info size={18} />
        </button>
      </div>
      <p className="text-2xl sm:text-3xl font-bold">
        {balance.toFixed(2)} $ORE
      </p>
      <div className="flex flex-col items-center mr-10">
        <Image src="/payouts/off-ramp.svg" alt="off-ramp" width={100} height={100} />
      </div>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <a
          href="https://exchange.mercuryo.io/?widget_id=21e6bd6b-a245-4d89-861a-775d8cebd88d&type=buy&currency=USDC&network=SOLANA&amount=30&fiat_currency=EUR&address=Bsw8DaAn7tb7n4AuP1WWVDS4BjEW3EVKnDwobqx8WYFC&signature=d06025aff066467a250244cc61ddc59ba3beeba38b40a5929bb1e22f91c2a4615b71dd391623a95429a06fd0e07c0e03cf29e845b49ea933102155e6ee6c28ea"
          target="_blank"
        >
          <button className="w-full sm:flex-1 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Off-ramp ORE
          </button>
        </a>
        <button className="w-full sm:flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
          Buy ORE
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-4 text-center">
        We use Jupiter API to first swap ORE to SOL/USDC and then off-ramp it using Mercuryo.
      </p>
    </div>
  );
};

export default OreBalanceCard;
