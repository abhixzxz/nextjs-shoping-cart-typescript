"use client";
import { RootState } from "@/app/redux/store";
import React, { useEffect, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { CartData, removeCartItem } from "@/app/redux/slice/cartSlice";
import Image from "next/image";
import { RiCloseCircleFill } from "react-icons/ri";

interface CartPageProps {
  handleCloseCart: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ handleCloseCart }) => {
  const dispatch = useDispatch();

  const [cartItemTotal, setCartItemTotal] = useState(0);
  const cartItemsRedux: CartData[] = useSelector(
    (state: RootState) => state.cart.cartDatas
  );

  const calculateTotalPrice = (items: CartData[]) => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  useEffect(() => {
    const totalPrice = calculateTotalPrice(cartItemsRedux);
    setCartItemTotal(totalPrice);
  }, [cartItemsRedux]);

  return (
    <div
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        onClick={handleCloseCart}
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cartItemsRedux?.map((item) => (
                          <li key={item.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <Image
                                width={100}
                                height={100}
                                src={
                                  typeof item.images === "string"
                                    ? item.images
                                    : item.images.src
                                }
                                alt={item.name}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">{item?.name}</a>
                                  </h3>
                                  <p className="ml-4 flex items-center">
                                    <FaIndianRupeeSign className="text-[15px] font-normal" />
                                    {item.price.toFixed(2)}
                                  </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item?.processor}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">
                                  {item?.companyName}
                                </p>
                                <div className="flex">
                                  <button
                                    onClick={() =>
                                      dispatch(removeCartItem(item.id))
                                    }
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p className="flex items-center">
                      <FaIndianRupeeSign className="text-[15px] font-normal" />

                      {cartItemTotal}
                    </p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-slate-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex-col justify-center gap-3 text-center text-sm text-gray-500">
                    <p>or</p>
                    <div className="mt-6 ">
                      <span
                        onClick={handleCloseCart}
                        className="cursor-pointer flex items-center uppercase justify-center gap-2 rounded-md border border-transparent bg-red-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        <RiCloseCircleFill className="text-[22px]" />
                        <span>Close Cart</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
