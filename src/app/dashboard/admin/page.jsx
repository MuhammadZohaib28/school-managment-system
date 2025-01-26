import AdminCard from "@/components/AdminCard";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import { cardData } from "@/components/data";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row h-full">
      {/* LEFT */}
      <div className="w-full lg:w-[70%] bg-blue-300 p-2 flex  flex-col gap-4">
        <div className="flex gap-4 justify-between flex-wrap">
          {cardData.map((i) => (
            <AdminCard
              key={i.userType}
              userType={i.userType}
              date={i.date}
              stats={i.stats}
            />
          ))}
        </div>

        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
      </div>

      {/* RIGHT */}

      <div className="w-full lg:w-[30%] bg-pink-300"></div>
    </div>
  );
};

export default AdminPage;
