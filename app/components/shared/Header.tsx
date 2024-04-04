"use client";
import React, { useState } from "react";
import MuiAppBar from "@mui/material/AppBar";
import AppBar from "@mui/material/AppBar";
import {
  Avatar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import SearchBar from "../ui/searchBar/SearchBar";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "red",
    width: "1rem",
    height: "1rem",
    borderRadius: "50%",
  },
}));

function HeaderNav() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleNavigateHome = () => {
    router.push("/");
  };
  const user: boolean = false;
  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "black",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          color: "white",
          fontWeight: "900",
        }}
      >
        <Toolbar className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <Typography
              variant="h6"
              noWrap
              className="cursor-pointer uppercase"
              component="div"
              onClick={handleNavigateHome}
              style={{
                fontWeight: "900",
                textTransform: "uppercase",
              }}
            >
              Trendy-Trove
            </Typography>
            <SearchBar />
            <div className="flex items-center justify-center">
              <div className="">
                {user ? (
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    className="cursor-pointer"
                  />
                ) : (
                  <button
                    onClick={() => router.push("/authentication/login")}
                    className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 "
                  >
                    Login / Register
                  </button>
                )}
              </div>
              <Tooltip title="Cart">
                <IconButton
                  style={{
                    color: "white",
                  }}
                  aria-label="cart"
                >
                  <div className="relative inline-block">
                    <div className="absolute top-[-3px] right-[-10px] bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[12px]">
                      3
                    </div>
                    <ShoppingCartIcon className="text-white w-8" />
                  </div>
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderNav;
