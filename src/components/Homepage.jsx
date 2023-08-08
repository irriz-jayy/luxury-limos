import React from "react";
// import hero from "../assets/hero.png";
import bg from "../assets/merc.png";
import arrow from "../assets/logos/arrow.png";
import Services from "./Services";
import Choose from "./Choose";
import Offer from "./Offer";
import Vehicles from "./Vehicles";
import Feature from "./Feature";

function Homepage() {
  return (
    <>
      {/* Hero section */}
      <div className="flex min-h-[50vh] m-4 items-center justify-center">
        <div className="w-full h-full flex flex-col items-center p-4 lg:w-1/4">
          <p className="text-4xl font-heading text-center my-2">
            Luxury limo for hire
          </p>
          <p className="text-center font-paragraph text-lg my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
            ipsum earum illo cum sequi assumenda nihil at, aliquam temporibus
            nostrum qui dicta consectetur quos reprehenderit quis, tenetur vel
            pariatur vitae.
          </p>
          <button className="bg-black w-40 h-12 px-2 font-heading font-bold text-white mt-2 lg:mt-0 hover:bg-gray-500 hover:text-black flex items-center justify-between">
            Book now
            <span className="text-white">
              <img src={arrow} alt="" className="" />
            </span>
          </button>
        </div>
        <img
          src={bg}
          className="rounded-md w-2/3 lg:w-3/4 hidden md:block lg:block"
          alt=""
        />
      </div>
      {/* Form section */}
      <div className="w-full flex items-center justify-center">
        <div className="w-3/4 h-full ">
          <h2 className="text-center font-bold text-lg font-heading">
            Book Now
          </h2>
          <form className="font-paragraph text-lg font-bold w-full min-h-96 p-4 bg-gray-200 border rounded-md gap-2 grid md:grid-cols-2 lg:grid-cols-2">
            <input
              type="text"
              placeholder="Pick up address"
              className="h-12 p-2 bg-gray-100 rounded-md"
            />
            <input
              type="text"
              placeholder="Drop off address"
              className="h-12 p-2 bg-gray-100 rounded-md"
            />
            <input type="date" className="h-12 p-2 bg-gray-100 rounded-md" />
            <input type="time" className="h-12 p-2 bg-gray-100 rounded-md" />
            <button className="bg-black text-white h-12 rounded-md md:col-span-2 lg:col-span-2 hover:bg-gray-500 hover:text-black">
              Reserve now
            </button>
          </form>
        </div>
      </div>
      <Services />
      <Vehicles />
      <Choose />
      <Offer />
      <Feature />
    </>
  );
}

export default Homepage;
