"use client";
import React from "react";
import SignUpImg from "../../../public/assets/images/6527313.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignUpForm: React.FC = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div>
        <Image
          src={SignUpImg}
          alt="Sign Up Image"
          className="w-[90%] object-cover"
        />
      </div>

      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Create an account
          </h1>

          <form className="mt-6" action="#" method="POST">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter First Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete="given-name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none"
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none"
                autoComplete="tel"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none"
                autoComplete="bday"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Gender</label>
              <select
                name="gender"
                id="gender"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full block bg-yellow-400 hover:bg-indigo-400 focus:bg-yellow-400 text-black hover:text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Sign Up
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <p className="mt-8">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/authentication/login")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              Log in here
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
