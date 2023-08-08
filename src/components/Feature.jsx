import React from "react";
import cadillac from "../assets/cars/cadillac-grey.png";
import check from "../assets/logos/checkmark.png";

const features = [
  {
    text: "For upto 8 passengers",
  },
  {
    text: "Incredible sound system",
  },
  {
    text: "Fiber optic lights",
  },
  {
    text: "Bar area with fridge",
  },
  {
    text: "Tinted windows",
  },
  {
    text: "Divider with premium style",
  },
  {
    text: "Multipurpose designed limo",
  },
  {
    text: "Chill air conditioning",
  },
];

function Feature() {
  return (
    <div className="min-h-72 border m-4 p-2 flex bg-gray-200 rounded-md">
      <div className=" w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center items-center">
        <p className="font-heading font-bold text-lg">Cadillac Escalade</p>
        <div className="grid grid-cols-2 gap-2">
          {features.map((feature, index) => (
            <div
              className="border p-2 flex items-center font-paragraph"
              key={index}
            >
              <img src={check} alt="" className="pr-2" />
              {feature.text}
            </div>
          ))}
        </div>
        <button className="bg-black text-white h-12 w-1/4 font-paragraph font-bold rounded-md hover:bg-gray-500 hover:text-black">
          Reserve now
        </button>
      </div>
      <div className="w-1/2 flex hidden md:block lg:block">
        <img src={cadillac} alt="" className="h-full m-auto" />
      </div>
    </div>
  );
}

export default Feature;
