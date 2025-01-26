import Image from "next/image";
import React from "react";

const AdminCard = (props) => {
  return (
    <div key={props.key} className="flex justify-between flex-col items-start p-4 flex-1 rounded-lg odd:bg-customPurple even:bg-customYellow gap-5">
      <div className="flex justify-between items-center w-full">
        <span className="bg-slate-50 text-purple-400 rounded-xl p-1">
          {props.date}
        </span>
        <Image src={"/more.png"} alt="more" width={30} height={30} />
      </div>

      <h1 className="font-bold text-xl">{props.stats}</h1>

      <span className="text-gray-400">{props.userType}</span>
    </div>
  );
};

export default AdminCard;
