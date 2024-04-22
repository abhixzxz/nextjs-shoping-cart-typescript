import React from "react";

const WhishList = () => {
  return (
    <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
      <div className="flex flex-col justify-start items-start">
        <div>
          <p className="text-sm leading-4 text-gray-600 dark:text-white">
            Home
          </p>
        </div>
        <div className="mt-3">
          <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800 dark:text-white">
            Favourites
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-2xl tracking-tight leading-6 text-gray-600 dark:text-white">
            03 items
          </p>
        </div>

        <div className="">
          <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
            <div className="flex flex-col shadow-2xl p-7 rounded">
              <div className="relative">
                <img
                  className="hidden lg:block rounded"
                  src="https://assets.mspimages.in/gear/wp-content/uploads/2023/08/s24-ultra-50mp-telephoto-3x-optical-zoom.jpg"
                  alt="bag"
                />
                <img
                  className="hidden sm:block lg:hidden"
                  src="https://i.ibb.co/ZH9FmZL/Rectangle-23-1.png"
                  alt="bag"
                />
                <img
                  className="sm:hidden"
                  src="https://i.ibb.co/cyN26yn/Rectangle-23.png"
                  alt="bag"
                />
                <button
                  aria-label="close"
                  className="rounded-full top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400"
                >
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/wishlist-1-svg1.svg"
                    alt="close"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/wishlist-1-svg1dark.svg"
                    alt="close"
                  />
                </button>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="flex justify-center items-center">
                  <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 dark:text-white">
                    New York Streak
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    aria-label="show menu"
                    className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
                  >
                    <svg
                      id="chevronUp1"
                      className="fill-stroke"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5L5 1L1 5"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      id="chevronDown1"
                      className="hidden fill-stroke"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                id="menu1"
                className="flex flex-col jusitfy-start items-start mt-12"
              >
                <div>
                  <p className="tracking-tight text-xs leading-3 text-gray-800 dark:text-white">
                    MK617
                  </p>
                </div>
                <div className="mt-2">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    Beige brown
                  </p>
                </div>
                <div className="mt-6">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    42 size
                  </p>
                </div>
                <div className="mt-6">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    1,000
                  </p>
                </div>
                <div className="flex justify-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                  <div className="w-full">
                    <button className="rounded focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 dark:text-white text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-gray-300 hover:text-gray-800 dark:text-white bg-white border border-gray-800 dark:hover:text-white dark:bg-transparent dark:border-white dark:hover:bg-gray-800 dark:hover:text-white">
                      More information
                    </button>
                  </div>
                  <div className="w-full">
                    <button className="rounded focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-black bg-gray-800 border border-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col shadow-2xl p-7 rounded">
              <div className="relative">
                <img
                  className="hidden lg:block rounded"
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZmcvQnUxdUdEMFZ5SXlMVXRiaERVdnNCckZqMTMrS3dIUWFPL2dFWXJDTmpDNlBJczZRQmxyM2ZhZjVKT0RIMFJtMnIvc0R1T2E0dzJMNDBHTWVISnVWUUI4TzJ6bEM4S1ZTK1ZYbjIxMUpnPT0=&traceId=1"
                  alt="bag"
                />
                <img
                  className="hidden sm:block lg:hidden"
                  src="https://i.ibb.co/ZH9FmZL/Rectangle-23-1.png"
                  alt="bag"
                />
                <img
                  className="sm:hidden"
                  src="https://i.ibb.co/cyN26yn/Rectangle-23.png"
                  alt="bag"
                />
                <button
                  aria-label="close"
                  className="rounded-full top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400"
                >
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/wishlist-1-svg1.svg"
                    alt="close"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/wishlist-1-svg1dark.svg"
                    alt="close"
                  />
                </button>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="flex justify-center items-center">
                  <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 dark:text-white">
                    New York Streak
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    aria-label="show menu"
                    className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
                  >
                    <svg
                      id="chevronUp1"
                      className="fill-stroke"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5L5 1L1 5"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      id="chevronDown1"
                      className="hidden fill-stroke"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                id="menu1"
                className="flex flex-col jusitfy-start items-start mt-12"
              >
                <div>
                  <p className="tracking-tight text-xs leading-3 text-gray-800 dark:text-white">
                    MK617
                  </p>
                </div>
                <div className="mt-2">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    Beige brown
                  </p>
                </div>
                <div className="mt-6">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    42 size
                  </p>
                </div>
                <div className="mt-6">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    1,000
                  </p>
                </div>
                <div className="flex justify-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                  <div className="w-full">
                    <button className="rounded focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 dark:text-white text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-gray-300 hover:text-gray-800 dark:text-white bg-white border border-gray-800 dark:hover:text-white dark:bg-transparent dark:border-white dark:hover:bg-gray-800 dark:hover:text-white">
                      More information
                    </button>
                  </div>
                  <div className="w-full">
                    <button className="rounded focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-black bg-gray-800 border border-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col shadow-2xl p-7 rounded">
              <div className="relative">
                <img
                  className="hidden lg:block rounded"
                  src="https://assets.mspimages.in/gear/wp-content/uploads/2023/08/s24-ultra-50mp-telephoto-3x-optical-zoom.jpg"
                  alt="bag"
                />
                <img
                  className="hidden sm:block lg:hidden"
                  src="https://i.ibb.co/ZH9FmZL/Rectangle-23-1.png"
                  alt="bag"
                />
                <img
                  className="sm:hidden"
                  src="https://i.ibb.co/cyN26yn/Rectangle-23.png"
                  alt="bag"
                />
                <button
                  aria-label="close"
                  className="rounded-full top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400"
                >
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/wishlist-1-svg1.svg"
                    alt="close"
                  />
                  <img
                    className="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/wishlist-1-svg1dark.svg"
                    alt="close"
                  />
                </button>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="flex justify-center items-center">
                  <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 dark:text-white">
                    New York Streak
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    aria-label="show menu"
                    className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
                  >
                    <svg
                      id="chevronUp1"
                      className="fill-stroke"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5L5 1L1 5"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      id="chevronDown1"
                      className="hidden fill-stroke"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                id="menu1"
                className="flex flex-col jusitfy-start items-start mt-12"
              >
                <div>
                  <p className="tracking-tight text-xs leading-3 text-gray-800 dark:text-white">
                    MK617
                  </p>
                </div>
                <div className="mt-2">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    Beige brown
                  </p>
                </div>
                <div className="mt-6">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    42 size
                  </p>
                </div>
                <div className="mt-6">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    1,000
                  </p>
                </div>
                <div className="flex justify-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                  <div className="w-full">
                    <button className="rounded focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 dark:text-white text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-gray-300 hover:text-gray-800 dark:text-white bg-white border border-gray-800 dark:hover:text-white dark:bg-transparent dark:border-white dark:hover:bg-gray-800 dark:hover:text-white">
                      More information
                    </button>
                  </div>
                  <div className="w-full">
                    <button className="rounded focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-black bg-gray-800 border border-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      Add to cart
                    </button>
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

export default WhishList;
