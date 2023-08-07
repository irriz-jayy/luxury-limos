import React from "react";
// import hero from "../assets/hero.png";
import bg from "../assets/heroimage.png";

function Homepage() {
  return (
    <>
      {/* Hero section */}
      <div className="relative min-h-[50vh] m-4">
        <img
          src={bg}
          className="z-0 rounded-md h-full w-full hidden md:block lg:block"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-top p-4">
          <p className="text-4xl font-bold text-center">Luxury limo for hire</p>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
            ipsum earum illo cum sequi assumenda nihil at, aliquam temporibus
            nostrum qui dicta consectetur quos reprehenderit quis, tenetur vel
            pariatur vitae.
          </p>
          <button className="bg-black w-40 h-8 rounded-md text-white mt-2 lg:mt-0">
            Book now
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full  bg-black opacity-30 rounded-md hidden md:block lg:block"></div>
      </div>
      {/* Form section */}
      <div className="w-full flex items-center justify-center">
        <div className="w-3/4 h-full ">
          <h2 className="text-center font-bold text-lg">Book Now</h2>
          <form className="w-full min-h-96 p-4 bg-gray-200 border rounded-md gap-2 grid md:grid-cols-2 lg:grid-cols-2">
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
            <button className="bg-black text-white h-12 rounded-md hover:bg-gray-500 md:col-span-2 lg:col-span-2">
              Reserve now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Homepage;
