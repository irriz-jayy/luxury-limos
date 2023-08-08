import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Bentley from "../assets/cars/01-bentley-mulsanne02.png";
import Lexus from "../assets/cars/01-lexus-ls.png";
import RR from "../assets/cars/01-range-rover-sv.png";
import RollsRoyce from "../assets/cars/002-2022-Rolls-Royce-Ghost-Black-Badge.png";
import Jaguar from "../assets/cars/2015-jaguar-xjseries-xjl-supercharged-sedan-angular-front.png";
import Merc from "../assets/cars/2016-Mercedes-Benz-S-Class-Maybach-600-1-1.png";
import Audi from "../assets/cars/2019-Audi-A8-L-71.png";
import Bentayga from "../assets/cars/Bentley-Bentayga.jpg";
import Bmw from "../assets/cars/bmw-7-series-mp-modellfinder.png";
import Cadillac from "../assets/cars/cadillac-black.png";
import Vclass from "../assets/cars/Mercedes-V-Class.png";
import Porsche from "../assets/cars/Porsche_Panamera_Turbo_S_Executive_2022_1.jpg";

function Vehicles() {
  const cars = [
    { id: 1, name: "Bentley Mulsanne", price: "$100/day", image: Bentley },
    { id: 2, name: "Lexus ls", price: "$120/day", image: Lexus },
    { id: 3, name: "Range Rover Sv", price: "$120/day", image: RR },
    { id: 4, name: "Rolls Royce Ghost", price: "$120/day", image: RollsRoyce },
    { id: 5, name: "Jaguar xj", price: "$120/day", image: Jaguar },
    { id: 6, name: "Mercedes S class", price: "$120/day", image: Merc },
    { id: 7, name: "Audi A8", price: "$120/day", image: Audi },
    { id: 8, name: "Bentley Bentayga", price: "$120/day", image: Bentayga },
    { id: 9, name: "BMW 7 Series", price: "$120/day", image: Bmw },
    { id: 10, name: "CAdillac Escalade", price: "$120/day", image: Cadillac },
    { id: 11, name: "Mercedes V Class", price: "$120/day", image: Vclass },
    { id: 12, name: "Porsche Panamera", price: "$120/day", image: Porsche },
  ];

  return (
    <>
      <div className="m-2 min-h-[50vh] border border-red-800">
        {/* header section */}
        <div className="max-h-36 grid grid-rows-2 font-heading md:grid-cols-2 lg:grid-cols-2 text-center">
          <p className="pt-4 text-2xl">Our fleet</p>
          <p className="md:pt-4 lg:pt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
            voluptatibus distinctio
          </p>
        </div>

        {/* Car cards section */}
        <div className="mt-4 overflow-x-auto">
          <div className="w-[80%] mx-auto">
            {" "}
            {/* Adjust the width here */}
            <Carousel
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              emulateTouch={true}
              swipeable={true}
            >
              {cars.map((car) => (
                <div key={car.id} className="p-4">
                  <div className="bg-white rounded-md shadow-md">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-48 object-contain rounded-t-md"
                    />
                    <div className="p-4">
                      <p className="font-semibold text-lg">{car.name}</p>
                      <p className="text-gray-600">{car.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vehicles;
