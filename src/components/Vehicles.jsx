import React from "react";

function Vehicles() {
  return (
    <>
      <div className="m-2 min-h-[50vh] border border-red-800">
        {/* header section */}
        <div className="border max-h-32 grid grid-rows-2 font-heading md:grid-cols-2 lg:grid-cols-2 text-center">
          <p className="pt-4 text-2xl">Our fleet</p>
          <p className="pt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
            voluptatibus distinctio
          </p>
        </div>
      </div>
    </>
  );
}

export default Vehicles;
