import React from "react";
import "./notfound.css";
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <div className="container ">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content sm:w-1/2 w-full ">
        <h1
          className="sm:text-9xl text-5xl text-center mb-3 font-bold"
          style={{
            background:
              "linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Page 404 not found
        </h1>
        <h1 className=" sm:text-4xl text-2xl text-center">
          Let's design some{" "}
          <Link to="/design" className="hover:text-SuperPink font-bold">
            T-Shirt{" "}
          </Link>{" "}
          instead!
        </h1>
        <Link to="/contact">
          <button className="bg-SuperPink text-white px-4 py-2 rounded-md sm:w-1/2 w-full mt-5">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};
