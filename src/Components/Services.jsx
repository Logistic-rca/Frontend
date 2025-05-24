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
        <Card
          image="/src/assets/plane.jpg"
          title="Air Freight"
          context="Fly with airlines the trusted way to get to ur direction safely"
        />
        <Card
          image="/src/assets/cargo.jpg"
          title="Ocean Freight"
          context="Fly with airlines the trusted way to get to ur direction safely"
        />
        <Card
          image="/src/assets/ship-truck.jpg"
          title="Land Express"
          context="Fly with airlines the trusted way to get to ur direction safely"
        />
      </div>
      <p className="pt-10 text-[#4B4B4B]">
        This is just the tip of the ice berg. We mold our services based on your{" "}
        <span className="underline">specific demands.</span>
      </p>
      <div className="flex justify-center gap-50 mt-16">
        <div className="flex flex-col items-center">
          <span
            className="text-[120px] font-extrabold text-transparent stroke-blue-600"
            style={{ WebkitTextStroke: "2px #1e40af" }}
          >
            99%
          </span>
          <span className="text-blue-600 font-semibold text-lg ">
            Client satisfaction
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span
            className="text-[120px] font-extrabold text-transparent stroke-blue-600"
            style={{ WebkitTextStroke: "2px #1e40af" }}
          >
            13
          </span>
          <span className="text-blue-600 font-semibold text-lg ">
            Years of experience
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span
            className="text-[120px] font-extrabold text-transparent stroke-blue-600"
            style={{ WebkitTextStroke: "2px #1e40af" }}
          >
            570
          </span>
          <span className="text-blue-600 font-semibold text-lg ">
            Clients worldwide
          </span>
        </div>
      </div>

      <div className="relative w-full h-[500px] bg-[#6A5ACD] flex items-center justify-center mt-50 pb-50">
        <div className="bg-white rounded-[48px] shadow-2xl flex w-4/5 max-w-6xl mx-auto overflow-hidden relative mt-0">
          {/* Left: Text Content */}
          <div className="flex-1 p-12 flex flex-col justify-center">
            <div className="bg-[#f6f6ff] rounded-full px-4 py-1 w-max mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#6A5ACD] rounded-full inline-block"></span>
              <span className="text-[#6A5ACD] font-medium text-sm">
                About us
              </span>
            </div>
            <h1 className="text-5xl font-semibold leading-normal mb-4">
              Logistics technology's future <br />
              <span className="text-[#1e40af]">begins with us.</span>
            </h1>
            <button className="bg-[#1e40af] text-white px-6 py-3 rounded-lg font-semibold w-max mt-4 hover:bg-[#6A5ACD] transition">
              Learn more
            </button>
          </div>
          {/* Right: Image with Play Button */}
          <div className="flex-1 relative flex items-center justify-center">
            <img
              src="/src/assets/night.jpg"
              alt="Warehouse"
              className="w-full h-full object-cover rounded-[48px] min-h-[350px]"
            />
            <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
              <svg width="32" height="32" fill="#6A5ACD" viewBox="0 0 24 24">
                <polygon points="9.5,7.5 16.5,12 9.5,16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#6A5ACD] pt-0 flex justify-center">
        <div className="flex gap-10 w-4/5 max-w-6xl">
          {/* Card 1 */}
          <div className="bg-white rounded-[40px] shadow-xl p-10 flex flex-col items-start w-1/3 min-w-[280px]">
            {/* Icon */}
            <div className="mb-6">
              {/* Replace with your SVG */}
              <svg
                width="48"
                height="48"
                fill="none"
                stroke="#2d21c4"
                strokeWidth="2"
              >
                <rect x="8" y="16" width="32" height="20" rx="6" />
                <circle cx="16" cy="38" r="2" />
                <circle cx="32" cy="38" r="2" />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-2">Rail freight</h3>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
              href="#"
              className="text-[#2d21c4] font-semibold underline underline-offset-2"
            >
              Learn more
            </a>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-[40px] shadow-xl p-10 flex flex-col items-start w-1/3 min-w-[280px]">
            <div className="mb-6">
              {/* Replace with your SVG */}
              <svg
                width="48"
                height="48"
                fill="none"
                stroke="#2d21c4"
                strokeWidth="2"
              >
                <rect x="12" y="20" width="24" height="16" rx="4" />
                <rect x="20" y="12" width="8" height="8" rx="2" />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-2">Warehousing</h3>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
              href="#"
              className="text-[#2d21c4] font-semibold underline underline-offset-2"
            >
              Learn more
            </a>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-[40px] shadow-xl p-10 flex flex-col items-start w-1/3 min-w-[280px]">
            <div className="mb-6">
              {/* Replace with your SVG */}
              <svg
                width="48"
                height="48"
                fill="none"
                stroke="#2d21c4"
                strokeWidth="2"
              >
                <rect x="12" y="20" width="24" height="16" rx="4" />
                <rect x="20" y="12" width="8" height="8" rx="2" />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-2">Logistic services</h3>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
              href="#"
              className="text-[#2d21c4] font-semibold underline underline-offset-2"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
