import Image from "next/image";
import LightDropdown from "../dropdown/light-dropdown";
import { dropdownData } from "@/utils/testData";
import Mined from "../charts/mined";
import Active from "../charts/active";

export default function DashboardMainConnected() {
  return (
    <div className="px-1.5 flex flex-col gap-4 min-h-full">
      <div className="lg:flex-row flex flex-col justify-between gap-4">
        <div className="w-full lg:w-[35%] flex flex-col p-6 gap-6 bg-gradient-to-b from-[#E5DDF8]/60 to-[#E5DDF8]/0 shadow border border-black/5 rounded-xl">
          <div className="flex flex-row justify-between items-center">
            <div className="text-[#747474] text-xl font-instrument">
              Total Ore Mined
            </div>
            <LightDropdown
              title={dropdownData.title}
              options={dropdownData.options}
            />
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="text-black text-5xl font-semibold font-geist">
              $353.92
            </div>
            <div className="flex p-1.5 gap-2">
              <Image
                src="/dashboard/ore.svg"
                alt="Downward Arrow"
                width="16"
                height="16"
                className="mix-blend-difference"
              />
              <div className="text-[#747474] font-instrument text-2xl">
                5.40
              </div>
            </div>
          </div>
          <div>
            <button className="bg-black inline-block text-white px-3 py-2 rounded-xl hover:scale-95 transition-all">
              Off ramp
            </button>
          </div>
          <div>
            <Mined />
          </div>
        </div>
        <div className="w-full lg:w-[40%] flex flex-col gap-4">
          <div className="bg-gradient-to-b from-[#E4FDFF]/80 to-[#EEF8FC]/20 flex flex-col p-6 gap-6 shadow border border-black/5 rounded-xl">
            <div className="flex flex-row justify-between items-center">
              <div className="text-[#747474] text-xl font-instrument">
                Average Hash Power
              </div>
              <LightDropdown
                title={dropdownData.title}
                options={dropdownData.options}
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-3">
                <div className="text-black text-5xl font-semibold font-geist">
                  252k
                </div>
                <div className="text-[#747474] text-2xl">/s</div>
              </div>
              <div className="bg-[#E0F0E4] text-[#377E36] px-2 font-geist rounded">
                +3.4%
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col gap-6 p-6 shadow border border-black/5 rounded-xl">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-2">
                <button className="text-[#747474] font-instrument">
                  Staked Ore
                </button>
                <div className="flex gap-4">
                  <div className="text-black text-5xl font-semibold font-geist">
                    15.3
                  </div>
                  <Image
                    src="/dashboard/ore.svg"
                    alt="ORE Logo"
                    width="30"
                    height="30"
                    className="mix-blend-difference"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="text-[#747474] font-instrument">
                  Current multiplier
                </div>
                <div className="flex items-center">
                  <div className="ml-auto flex gap-2 bg-[#E0F0E4] text-[#377E36] px-2 font-geist rounded justify-end">
                    <Image
                      src="/dashboard/star.svg"
                      alt="Star"
                      width="12"
                      height="12"
                    />
                    1.75x
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <hr className="w-full border-[#f6f6f6]"></hr>
              <button className="bg-black w-full text-white text-center py-2 rounded-xl font-instrument hover:scale-95 transition-all">
                Stake ORE
              </button>
              <hr className="w-full border-[#f6f6f6]"></hr>
            </div>
            <div className="text-[#747474] text-left text-sm font-instrument">
              NOTE: Staking ORE boosts your mining rewards with a multiplier up
              to 2x, based on your stake ratio in the overall pool.
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] flex flex-col p-6 gap-6 bg-gradient-to-b from-[#FFF0F5]/80 to-[#FFF0F5]/20 shadow border border-black/5 rounded-xl">
          <div className="flex flex-row justify-between items-center">
            <div className="text-[#747474] text-xl font-instrument">
              Active Miners
            </div>
            <LightDropdown
              title={dropdownData.title}
              options={dropdownData.options}
            />
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="text-black text-5xl font-semibold font-geist">
              1.2k
            </div>
            <div className="flex flex-col p-1.5 items-end">
              <div className="bg-[#E0F0E4] text-[#377E36] px-2 font-geist rounded">
                +2.03k
              </div>
              <div>new miners today</div>
            </div>
          </div>
          <div className="mt-14">
            {" "}
            <Active />
          </div>
        </div>
      </div>
      <div className="flex-grow bg-white shadow border border-black/5 rounded-lg"></div>
    </div>
  );
}
