"use client";
import React from "react";
import Sidebar from "../components/shared/Sidebar";
import { Grid } from "@mui/material";
import HeaderNav from "../components/shared/Header";
import { Provider } from "react-redux";
import store, { persistor } from "../redux/store"; // Import persistor from store
import { PersistGate } from "redux-persist/integration/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Grid container>
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </Grid>
    </Provider>
  );
};

export default Layout;
