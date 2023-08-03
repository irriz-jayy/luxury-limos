import React from "react";
import hero from "../assets/hero.png";

function Homepage() {
  return (
    <>
      <div className="border relative min-h-[70vh] m-4">
        <img
          src={hero}
          className="z-0 rounded-md h-full w-full hidden lg:block lg:h-full lg:w-full"
          alt=""
        />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center p-4  ">
          {" "}
          <p className="text-4xl font-bold">Luxury limo for hire</p>
          <p className="w-auto ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
            ipsum earum illo cum sequi assumenda nihil at, aliquam temporibus
            nostrum qui dicta consectetur quos reprehenderit quis, tenetur vel
            pariatur vitae.
          </p>
          <button className="bg-black  text-white mt-2 lg:mt-0">
            Book now
          </button>
        </div>
        <div className="absolute top-20 lg:left-4 w-full h-full flex flex-col items-center mt-20 sm:mt-8 md:mt-8 lg:mt-0 lg:items-end justify-center p-8">
          <form className="bg-white bg-opacity-30 border gap-2 p-4 min-h-96 flex flex-col justify-center rounded-md">
            <h2 className="text-center font-bold">Book Now</h2>
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
            <button className="bg-black text-white rounded-md">
              Reserve now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Homepage;
