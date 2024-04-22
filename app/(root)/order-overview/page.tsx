import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import GrowthSection from "./growth/growth";

const OrderOverview: React.FC = () => {
  return (
    <div className="relative my-10 flex h-full flex-col overflow-hidden rounded-2xl bg-white text-gray-600 shadow-lg ring-1 ring-gray-200">
      <GrowthSection />
      <div className="border-b p-6">
        <h6 className="mb-2 text-base font-semibold">Orders overview</h6>
        <p className="mb-4 text-sm font-light">
          <i
            className="inline-block font-black not-italic text-green-600"
            aria-hidden="true"
          ></i>
          <span className="font-semibold">24%</span> this month
        </p>
      </div>
      <div className="flex-auto p-6">
        <div className="relative flex flex-col justify-center">
          <div className="relative mb-4">
            <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
              A
            </span>
            <div className="ml-12 w-auto pt-1">
              <h6 className="text-sm flex items-center gap-2 font-semibold text-blue-900">
                240000 <FaRupeeSign />, Design changes
              </h6>
              <p className="mt-1 text-xs text-gray-500">22 DEC 7:20 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOverview;
