"use client";
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Rating,
  Box,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import dummyData from "@/app/constants/dummyData";
import ProductFilter from "./productFilter/productFilter";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../../../redux/slice/productSlice";

function ProductList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const filteredData = useSelector((state) => state.products.filteredProducts);
  const handleProductClick = (product) => {
    dispatch(selectProduct(product));
    router.push("products/productList/singleProduct");
  };

  return (
    <div className="w-full">
      <Grid container spacing={2} className="w-full">
        <Grid
          item
          xs={2.5}
          style={{
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Grid className="fixed" style={{}}>
            <Grid item xs={12}>
              <ProductFilter />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={9} className="p-2">
          <Grid container spacing={2}>
            {filteredData?.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                style={{
                  overflow: "scroll",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "stretch",
                }}
              >
                <Card
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    boxShadow:
                      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                    margin: "5px",
                  }}
                >
                  <div
                    onClick={() => handleProductClick(item)}
                    className="flex-col items-center justify-center gap-3 cursor-pointer"
                    style={{
                      height: "220px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      width={200}
                      height={100}
                      src={item?.images}
                      className="cursor-pointer"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <CardContent style={{ flexGrow: 1 }}>
                    <Tooltip title={item?.name} arrow>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className=""
                        style={{
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          maxWidth: "100%",
                        }}
                      >
                        {item?.name}
                      </Typography>
                    </Tooltip>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "8px",
                      }}
                    >
                      <Typography variant="body1" color="text.primary">
                        {item?.price}
                      </Typography>
                      <Box
                        sx={{
                          width: 200,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Rating
                          name="hover-feedback"
                          value={item?.rating}
                          precision={0.5}
                          emptyIcon={
                            <StarIcon
                              style={{ opacity: 0.55 }}
                              fontSize="inherit"
                            />
                          }
                        />
                      </Box>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                      {item?.description.length > 200
                        ? `${item?.description.substring(0, 200)}...`
                        : item?.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductList;
