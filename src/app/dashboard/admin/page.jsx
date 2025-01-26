import AdminCard from "@/components/AdminCard";
import { cardData } from "@/components/data";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row h-full">
      {/* LEFT */}
      <div className="w-full lg:w-[70%] bg-blue-300 p-2">
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
      </div>

      {/* RIGHT */}

      <div className="w-full lg:w-[30%] bg-pink-300">Right</div>
    </div>
  );
};

export default AdminPage;
