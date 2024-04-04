import React, { useEffect, useState } from "react";
import { InputAdornment, IconButton, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import dummyData from "@/app/constants/dummyData";
import { useDispatch } from "react-redux";
import { setFilteredProducts } from "@/app/redux/slice/productSlice";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const filteredResults = dummyData.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    dispatch(setFilteredProducts(filteredResults));
  }, [searchInput]);

  return (
    <div style={{ width: "40%", margin: "0 auto" }}>
      <div style={{ display: "flex" }}>
        <div style={{ position: "relative", width: "100%" }}>
          <Input
            type="search"
            id="search-dropdown"
            placeholder="Search Mobiles, Laptops, Dress..."
            required
            className="text-white pl-10 placeholder:text-white"
            onChange={(e) => setSearchInput(e.target.value)}
            style={{
              padding: "4px",
              paddingLeft: "19px",
              width: "100%",
              borderRadius: "8px",
              marginRight: "8px",
              border: "2px solid #ccc",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  aria-label="search"
                  style={{
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "5px",
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
