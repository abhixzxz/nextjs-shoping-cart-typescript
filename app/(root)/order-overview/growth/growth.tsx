import React from "react";

const GrowthSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gray-100">
      <img
        className="absolute top-0 h-full w-full object-cover object-center opacity-30"
        src="/images/ZbQYxs58uj_TXVLLRtSaa.png"
        alt="Background"
      />

      <div className="bg-white/60 relative mx-auto flex h-full w-full flex-col items-center justify-center px-4 py-12 backdrop-blur-md sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2 className="-mx-4 px-4 pt-4 pb-6 text-3xl text-blue-600 sm:text-4xl xl:text-5xl">
          Our <span className="font-bold">Orders</span>
        </h2>

        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-y-4 gap-x-8 text-center sm:mt-12 sm:text-left md:grid-cols-3">
          <div className="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
            <p className="relative text-3xl font-black text-blue-600 sm:text-5xl">
              25M
            </p>
            <p className="relative mt-5 text-gray-600">
              Thank You for 25 Million Orders! Celebrate with Us!" Dedicated
              Landing Page: Create a landing page highlighting the milestone
              achieved, expressing gratitude to customers, and perhaps offering
              special discounts or promotions as a token of appreciation.
            </p>
          </div>

          <div className="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
            <p className="relative text-3xl font-black text-blue-600 sm:text-5xl">
              99.9%
            </p>
            <p className="relative mt-5 text-gray-600">
              Celebrating a 99.9% Success Rate in Orders! Thank You for Trusting
              Us!
            </p>
          </div>

          <div className="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
            <p className="relative text-3xl font-black text-blue-600 sm:text-5xl">
              10000+
            </p>
            <p className="relative mt-5 text-gray-600">
              Celebrating 20 million satisfied customers is a remarkable
              achievement that speaks volumes about your commitment to
              excellence and customer satisfaction. Here are some content ideas
              to showcase and celebrate this milestone
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
