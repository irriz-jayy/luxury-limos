import React from "react";

function Offer() {
  return (
    <>
      <div className="text-center border mt-2 py-4 bg-gray-200">
        <div>
          <p className="text-4xl font-paragraph font-bold">
            Only today at $7/day
          </p>
          <p className="font-paragraph text-lg">
            take advantage of our hot offers saving a significant amount when
            renting a limounsine
          </p>
        </div>
        <button className="bg-black w-40 h-12 px-2 font-heading font-bold text-white hover:bg-gray-500 hover:text-black">
          Book now
        </button>
      </div>
    </>
  );
}

export default Offer;
