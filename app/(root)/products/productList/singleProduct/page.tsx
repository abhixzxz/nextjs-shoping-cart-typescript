"use client";

import { selectSelectedProduct } from "@/app/redux/slice/productSlice";
import { RootState } from "@/app/redux/store";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoImg from "../../../../../public/assets/images/noImage.jpg";
import { FaRupeeSign } from "react-icons/fa";
import { CartData, addCartItem } from "@/app/redux/slice/cartSlice";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const SingleProductPage = () => {
  const selectedProduct = useSelector(selectSelectedProduct);
  const [showAlert, setShowAlert] = useState(false);
  const [sucessAlert, setSucessAlert] = useState(false);

  const dispatch = useDispatch();
  const cartItemsRedux: CartData[] = useSelector(
    (state: RootState) => state.cart.cartDatas
  );
  const handleAddToCart = () => {
    if (selectedProduct && cartItemsRedux) {
      const isProductInCart = cartItemsRedux.some(
        (item) => item.id === selectedProduct.id
      );
      if (!isProductInCart) {
        dispatch(addCartItem(selectedProduct));
        setSucessAlert(true);
      } else {
        setShowAlert(true);
      }
    }
  };
  const handleCloseSnackbar = () => {
    setShowAlert(false);
  };

  const handleCloseSucessAlert = () => {
    setSucessAlert(false);
  };
  console.log("selected product:=>", selectedProduct);
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <Image
                    alt="hh"
                    width={400}
                    height={200}
                    // src={selectedProduct?.images?.src ?? NoImg}
                    src={
                      typeof selectedProduct?.images === "string"
                        ? selectedProduct?.images
                        : selectedProduct?.images?.src || NoImg
                    }
                    className="cursor-pointer"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                      src={
                        typeof selectedProduct?.images === "string"
                          ? selectedProduct?.images
                          : selectedProduct?.images?.src || NoImg
                      }
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                      src={
                        typeof selectedProduct?.images === "string"
                          ? selectedProduct?.images
                          : selectedProduct?.images?.src || NoImg
                      }
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                      src={
                        typeof selectedProduct?.images === "string"
                          ? selectedProduct?.images
                          : selectedProduct?.images?.src || NoImg
                      }
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm:text-2xl font-bold text-gray-900 sm:text-3xl">
              {selectedProduct?.name}
            </h1>

            <div className="mt-5 flex items-center">
              <div className="flex items-center">
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    className=""
                  ></path>
                </svg>
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    className=""
                  ></path>
                </svg>
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    className=""
                  ></path>
                </svg>
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    className=""
                  ></path>
                </svg>
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    className=""
                  ></path>
                </svg>
              </div>
              <p className="ml-2 text-sm font-medium text-gray-500">
                {selectedProduct?.rating} Reviews
              </p>
            </div>

            <h2 className="mt-8 text-base text-gray-900">
              Choose your Emi plan
            </h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              <label className="">
                <input
                  type="radio"
                  name="subscription"
                  value="4 Months"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  4 Months
                </p>
                <span className="mt-1  text-center text-xs flex items-center">
                  <FaRupeeSign /> 10000/mo
                </span>
              </label>
              <label className="">
                <input
                  type="radio"
                  name="subscription"
                  value="8 Months"
                  className="peer sr-only"
                  checked
                />
                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  8 Months
                </p>
                <span className="mt-1  text-center text-xs flex items-center">
                  <FaRupeeSign /> 6900/mo
                </span>{" "}
              </label>
              <label className="">
                <input
                  type="radio"
                  name="subscription"
                  value="12 Months"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  12 Months
                </p>
                <span className="mt-1  text-center text-xs flex items-center">
                  <FaRupeeSign /> 3300/mo
                </span>{" "}
              </label>
            </div>

            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-center">
                <span className="text-3xl">
                  <FaRupeeSign />
                </span>
                <h1 className="text-3xl font-bold">{selectedProduct?.price}</h1>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 mr-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Add to cart
              </button>
            </div>
            <div className="">
              <button className="flex justify-center items-center float-right rounded-md border-2 border-transparent bg-orange-500 bg-none w-[70%] mt-1  py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-orange-800">
                Buy now
              </button>
            </div>

            <ul className="mt-8 space-y-2">
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  className="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    className=""
                  ></path>
                </svg>
                Free shipping worldwide
              </li>

              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  className="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    className=""
                  ></path>
                </svg>
                Cancel Anytime
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="border-b border-gray-300">
              <nav className="flex gap-4">
                <a
                  href="#"
                  title=""
                  className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                >
                  {" "}
                  Description{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
                >
                  Reviews
                  <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                    {" "}
                    {selectedProduct?.rating}
                  </span>
                </a>
              </nav>
            </div>
            <div className="mt-8 flow-root sm:mt-12">
              <h1 className="text-3xl font-bold">Details</h1>
              <p className="mt-4">{selectedProduct?.description}</p>
              <h1 className="mt-8 text-3xl font-bold">
                Specs of {selectedProduct?.name}
              </h1>
              <div className="">
                <ul>
                  <li>Processor: {selectedProduct?.processor}</li>
                  <li>Ram: {selectedProduct?.ram}</li>
                  <li>Rom: {selectedProduct?.rom}</li>
                  <li>Battery: {selectedProduct?.battery}</li>
                  <li>Display: {selectedProduct?.display}</li>
                  <li>Camera: {selectedProduct?.camera}</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 flow-root sm:mt-12">
              <h1 className="text-3xl font-bold">Delivered To Your Door</h1>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                accusantium nesciunt fuga.
              </p>
            </div>
          </div>
          <Snackbar
            open={showAlert}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              onClose={handleCloseSnackbar}
              severity="error"
            >
              This item is already in your cart.
            </MuiAlert>
          </Snackbar>

          <Snackbar
            open={sucessAlert}
            autoHideDuration={6000}
            onClose={handleCloseSucessAlert}
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              onClose={handleCloseSucessAlert}
              severity="success"
            >
              This item added to your cart.
            </MuiAlert>
          </Snackbar>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
