import Image from "next/image";

export default function DashboardMainNotConnected() {
  return (
    <div className="bg-white rounded-lg shadow-md flex-grow p-6 flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center">
        <Image
          src="/dashboard/empty_dashboard_illustration.svg"
          alt="Empty Dashboard Illustration"
          width="300"
          height="300"
        />
        <p className="mt-6 text-gray-500">Create a profile to see stats</p>
      </div>
    </div>
  );
}
