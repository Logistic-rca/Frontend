import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div className="mt-40 min-h-[200px] flex flex-col items-center justify-center">
      <div className="bg-blue-200 w-50 rounded-2xl text-center py-2 px-1">
        <h2 className="font-bold text-xl text-[#6A5ACD] ">Our Services</h2>
      </div>
      <div className="text-center mt-10 w-[45%]">
        <h2 className="font-bold text-4xl">
          From Cargo transit to ware housing,{" "}
          <span className="text-[#6A5ACD]">We offer unparalled support</span>
        </h2>
      </div>
      <div className="flex gap-20">
      <Card image ="/src/assets/plane.jpg"
      title = "Air Freight"
      context="Fly with airlines the trusted way to get to ur direction safely"
      />
      <Card image ="/src/assets/cargo.jpg"
      title = "Ocean Freight"
      context="Fly with airlines the trusted way to get to ur direction safely"
      />
      <Card image ="/src/assets/ship-truck.jpg"
      title = "Land Express"
      context="Fly with airlines the trusted way to get to ur direction safely"
      />
      </div>
      <p className="pt-10 text-[#4B4B4B]">This is just the tip of the ice berg. We mold our services based on your <span className="underline">specific demands.</span></p>
    </div>

  );
};

export default Services;
