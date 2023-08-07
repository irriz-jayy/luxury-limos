import React from "react";
import booking from "../assets/logos/booking.png";
import chauffeur from "../assets/logos/chauffeur.jpg";
import cars from "../assets/logos/cars.png";
import payment from "../assets/logos/payment.png";

const choices = [
  {
    image: booking,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,voluptatibus distinctio",
  },
  {
    image: chauffeur,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,voluptatibus distinctio",
  },
  {
    image: cars,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,voluptatibus distinctio",
  },
  {
    image: payment,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,voluptatibus distinctio",
  },
];

function Choose() {
  return (
    <>
      <div className="m-2">
        {/* header section */}
        <div className="min-h-20 md:h-24 lg:h-20  grid grid-rows-2 font-heading md:grid-cols-2 lg:grid-cols-2 text-center">
          <p className="pt-4 text-2xl">Why choose us</p>
          <p className="md:pt-4 lg:pt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
            voluptatibus distinctio
          </p>
        </div>
        <div className="font-paragraph text-lg min-h-80 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {choices.map((choice, index) => (
            <div
              className="h-full rounded-md flex flex-col items-center justify-center"
              key={index}
            >
              <img
                src={choice.image}
                alt=""
                className="bg-gray-200 rounded-md p-2"
              />
              <div className="p-2">
                <p>{choice.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Choose;
