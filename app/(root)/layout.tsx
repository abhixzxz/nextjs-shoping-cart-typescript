import React from "react";
import Sidebar from "../components/shared/Sidebar";
import { Grid } from "@mui/material";
import HeaderNav from "../components/shared/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <HeaderNav />
      </Grid>
      <Grid item lg={2}>
        <Sidebar />
      </Grid>
      <Grid item lg={10}>
        <div className="root-container w-ful p-0 m-0">
          <div className="flex-grow justify-start pl-5 p-2">{children}</div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Layout;
