import { Accordion, Grid, Slider, Typography } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React, { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch } from "react-redux";
import { setFilteredProducts } from "@/app/redux/slice/productSlice";
import dummyData from "@/app/constants/dummyData";

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
  const dispatch = useDispatch();
  const [value, setValue] = useState<[number, number]>([0, 100000]);
  const [companyName, setCompanyName] = useState<string[]>([]);
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

  const filterProducts = () => {
    const filteredProducts = dummyData.filter((product) => {
      const withinPriceRange =
        product.price >= value[0] && product.price <= value[1];
      const isCompanySelected = companyName.includes(product.companyName);
      return withinPriceRange && isCompanySelected;
    });
    dispatch(setFilteredProducts(filteredProducts));
  };

  const handleCheckboxChange = (label: string) => {
    setCompanyName((prevCompanies) =>
      prevCompanies.includes(label)
        ? prevCompanies.filter((company) => company !== label)
        : [...prevCompanies, label]
    );
  };
  console.log(companyName);
  console.log(value[1]);
  console.log(value[0]);

  return (
    <div className="flex-col items-center justify-center  w-full  p-2 rounded">
      <h1 className="ml-5 mt-2 font-bold text-[18px]">Filters</h1>
      <div className={`m-3 p-3 bg-white rounded-lg shadow `}>
        <h6 className="mb-3 text-sm font-medium text-gray-900">
          Find by company name
        </h6>
        <ul className="space-y-2 text-sm">
          {products.map((product) => (
            <li key={product.id} className="flex items-center">
              <input
                id={product.id}
                type="checkbox"
                onChange={() => handleCheckboxChange(product.label)}
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
          <div className=" w-[90%] items-center">
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
            className="flex w-full justify-between  items-center gap-2"
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
        <button
          className="mt-4 flex justify-end float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 text-[14px] rounded"
          onClick={filterProducts}
        >
          Apply Filters
        </button>
      </div>
      <Grid container className="w-[260px] m-2 mt-5">
        <Accordion>
          <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
            <Typography className="uppercase text-[13px] h-3">Ram</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
            <Typography className="uppercase text-[13px] h-3">Rom</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
            <Typography className="uppercase text-[13px] h-3">
              Camera
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </div>
  );
};

export default ProductFilter;
