import React from "react";
import pickup from "../assets/pickup.jpg";
import bussiness from "../assets/bussiness.jpg";
import chaf from "../assets/chauffeur.jpg";
import wedding from "../assets/wedding.jpg";

const services = [
  {
    src: pickup,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci accusantium molestias pariatur ea saepe, maxime quos dolor quae deserunt consequuntur reiciendis.",
  },
  {
    src: bussiness,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci accusantium molestias pariatur ea saepe, maxime quos dolor quae deserunt consequuntur reiciendis.",
  },
  {
    src: chaf,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci accusantium molestias pariatur ea saepe, maxime quos dolor quae deserunt consequuntur reiciendis.",
  },
  {
    src: wedding,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci accusantium molestias pariatur ea saepe, maxime quos dolor quae deserunt consequuntur reiciendis.",
  },
];

function Services() {
  return (
    <>
      <div className="m-2 min-h-[50vh]">
        {/* header section */}
        <div className="max-h-32 grid grid-rows-2 font-heading md:grid-cols-2 lg:grid-cols-2 text-center">
          <p className="pt-4 text-2xl">Services</p>
          <p className="pt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
            voluptatibus distinctio
          </p>
        </div>
        {/* service cards */}
        <div className="min-h-96 p-2 grid grid-rows-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-md flex flex-col sm:flex-row md:flex-row lg:flex-row min-h-48"
            >
              <img
                src={service.src}
                alt=""
                className="h-1/2 w-full sm:w-3/4 sm:h-52 md:w-1/2 md:h-full lg:w-1/2 lg:h-52 p-2 rounded-md"
              />
              <div className="flex justify-center items-center text-lg font-paragraph w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-2 text-center">
                {service.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
