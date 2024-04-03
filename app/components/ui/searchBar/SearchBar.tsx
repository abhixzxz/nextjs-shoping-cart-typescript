import React, { useState } from "react";
import {
  Button,
  InputAdornment,
  IconButton,
  Input,
  Menu,
  MenuItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleToggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setIsOpen(false);
    setAnchorEl(null);
  };

  return (
    <div style={{ width: "40%", margin: "0 auto" }}>
      <div style={{ display: "flex" }}>
        {/* <Button
          className="text-[14px] w-[20%] p-[2px]"
          id="dropdown-button"
          onClick={handleToggleDropdown}
          variant="contained"
          endIcon={<ArrowDropDownIcon />}
        >
          categories
        </Button>
        <Menu
          id="dropdown"
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleCloseDropdown}
        >
          <MenuItem onClick={handleCloseDropdown}>
            <ListItemText primary="Mockups" />
          </MenuItem>
          <MenuItem onClick={handleCloseDropdown}>
            <ListItemText primary="Templates" />
          </MenuItem>
          <MenuItem onClick={handleCloseDropdown}>
            <ListItemText primary="Design" />
          </MenuItem>
          <MenuItem onClick={handleCloseDropdown}>
            <ListItemText primary="Logos" />
          </MenuItem>
        </Menu> */}
        <div style={{ position: "relative", width: "100%" }}>
          <Input
            type="search"
            id="search-dropdown"
            placeholder="Search Mobiles, Laptops, Dress..."
            required
            className="text-white pl-10 placeholder:text-white"
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
