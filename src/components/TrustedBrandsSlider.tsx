import React from "react";
import brandsData from "../brands.json";
import "./TrustedBrandsSlider.css";

export default function TrustedBrandsSlider() {
  return (
    <div className="py-12  overflow-hidden">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">The most trusted brands for local businesses and personal use</h1>
      <div className="">
        <div className="flex animate-scroll space-x-8">
          {brandsData.map((brand) => (
            <div
              key={brand.id}
              className="flex-shrink-0 w-36 h-36 bg-white rounded-lg shadow-lg flex items-center justify-center p-2 transition-transform duration-500 transform hover:scale-110"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-full w-full object-contain cursor-pointer hover:opacity-75 transition-opacity duration-300"
                onClick={() => window.open(brand.url, "_blank")}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
