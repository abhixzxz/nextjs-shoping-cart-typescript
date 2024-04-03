"use client";
import { Slider } from "@mui/material";
import React, { useState } from "react";

interface Product {
  id: string;
  label: string;
  count: number;
}

const products: Product[] = [
  { id: "apple", label: "Apple", count: 3 },
  { id: "samsung", label: "Samsung", count: 5 },
  { id: "google", label: "Google", count: 2 },
  { id: "oneplus", label: "OnePlus", count: 3 },
  { id: "xiaomi", label: "Xiaomi", count: 4 },
  { id: "realme", label: "Realme", count: 2 },
  { id: "motorola", label: "Motorola", count: 1 },
];

const ProductFilter: React.FC = () => {
  const [value, setValue] = useState<[number, number]>([0, 100000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue(newValue as [number, number]);
    }
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minValue = parseInt(e.target.value);
    const clampedMinValue = Math.min(minValue, value[1]);
    setValue([clampedMinValue, value[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxValue = parseInt(e.target.value);
    const clampedMaxValue = Math.max(maxValue, value[0]);
    setValue([value[0], clampedMaxValue]);
  };

  return (
    <div className="flex-col items-center justify-center  w-full" style={{}}>
      <h1 className="ml-5 mt-2 font-bold text-[18px]">Filters</h1>
      <div className={`z-10 m-3 w-full p-3 bg-white rounded-lg shadow`}>
        <h6 className="mb-3 text-sm font-medium text-gray-900">Category</h6>
        <ul className="space-y-2 text-sm">
          {products.map((product) => (
            <li key={product.id} className="flex items-center">
              <input
                id={product.id}
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
              />
              <label
                htmlFor={product.id}
                className="ml-2 text-sm font-medium text-gray-900"
              >
                {`${product.label} (${product.count})`}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 w-full flex flex-col items-center">
        <div className="mb-2 flex-col items-center w-full ">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Price
          </label>
          <div className=" w-full items-center ml-2">
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={0}
              max={50000}
            />
          </div>
        </div>
        <div className="flex justify-between gap-3 ">
          <div
            className="flex w-full justify-between  items-center gap-8"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="flex flex-col">
              <span>min</span>
              <input
                type="number"
                value={value[0]}
                onChange={handleMinChange}
                className="border border-gray-300 rounded px-2 text-[15px] w-28"
              />
            </div>
            <div className="flex flex-col justify-between">
              <span>max</span>
              <input
                type="number"
                value={value[1]}
                onChange={handleMaxChange}
                className="border border-gray-300 rounded px-2 text-[15px] w-28"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
