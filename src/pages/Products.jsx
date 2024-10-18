import canvas_capy from "../assets/canvas_capy.png";
import peace from "../assets/peace.png";
import womens from "../assets/womens.jpg";
import plastic from "../assets/plastic.jpg";
import barcelona from "../assets/barcelona.png";
import lazy from "../assets/lazy.png";

import ropa from "../assets/images/ropa.jpg";
import tote from "../assets/images/tote.jpg";
import mug from "../assets/images/mug.jpg";
import phone from "../assets/images/phone.jpg";
import acrylic from "../assets/images/acryl.jpg";
import { Link } from "react-router-dom";

import { Carousel } from "../components/orgamisms/Carousel";

export const Products = () => {
  return (
    <div>
      <div className="container mb-4">
        <Carousel />
      </div>

      <div className="text-center p-5 ">
        <h1 className="font-bold text-4xl mb-2">Featured Products</h1>
      </div>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-5 mb-5"
      >
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={canvas_capy}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                T-Shirt
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Don`t Worry Be Capy
              </p>
              <div className="flex items-center">
                <p className="text-md  text-black  text-black cursor-auto my-3">
                  Starting from 16.99€
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={peace}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                T-SHIRT
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Peace Was Never An Option
              </p>
              <div className="flex items-center">
                <p className="text-md  text-black cursor-auto my-3">
                  Starting from 16.99€
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={womens}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Tote Bag
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Womens No Cry
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  Starting from 16.99€
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={barcelona}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">Mug</span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Barcelona
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  Starting from 5.99€
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={lazy}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">Mug</span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                I`m Not Lazy
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  Starting from 5.99€
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={plastic}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Tote Bag
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                I`m Not Plastic
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  Starting from 4.99€
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      <div className="carousel carousel-center rounded-box mt-9">
        <div className="carousel-item">
          <img
            src={ropa}
            alt="Pizza"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={tote}
            alt="Pizza"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={mug}
            alt="Pizza"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={phone}
            alt="Pizza"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={acrylic}
            alt="Pizza"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      </div>
      <div className="container text-center mx-auto my-9">
        <p className="sm:text-4xl  text-2xl mb-3 font-bold">Need some help?</p>
        <p className="sm:text-2xl text-md mb-5 ">
          Contact us and we`ll assist you with anything you need!
        </p>
        <button className="btn sm:btn-lg sm:btn-md bg-SuperPink text-white hover:bg-SkyBlue">
          <Link to="/contact">Contact us</Link>
        </button>
      </div>
    </div>
  );
};
