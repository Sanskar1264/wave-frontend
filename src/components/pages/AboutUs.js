import React from "react";
import img from "./../../assets/provider-23.jpg";
import { CircleCheck } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="mt-10 px-[3vw] flex items-center gap-10 justify-center w-[98vw] h-[85vh]">
      <div className="w-1/2">
        <img src={img} alt="" className="rounded-md" />
      </div>
      <div className="w-1/2 space-y-2">
        <h3 className="font-semibold">ABOUT OUR COMPANY</h3>
        <h1 className="text-3xl font-bold w-96">
          Best Solution For Cleaning Services
        </h1>
        <p className="text-md text-gray-500">
          Welcome to Truelysell, your premier destination for connecting with
          top-rated service providers and finding the perfect match for your
          needs. Our platform is designed to simplify the process of
          discovering, evaluating, and hiring trusted professionals across a
          wide range of services, from home improvement and IT support to
          personal care and more.
        </p>
        <p className="text-md text-gray-500">
          At Truelysell, our mission is to bridge the gap between service
          providers and customers by offering a seamless and efficient
          marketplace experience. We aim to empower both parties by providing a
          reliable platform where quality, transparency, and customer
          satisfaction are our top priorities.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <div className="flex items-center gap-2">
            <CircleCheck />
            <p className="text-gray-500">We prioritize quality and reliability</p>
          </div>
          <div className="flex items-center gap-2">
            <CircleCheck />
            <p className="text-gray-500">We prioritize quality and reliability</p>
          </div>
          <div className="flex items-center gap-2">
            <CircleCheck />
            <p className="text-gray-500">We prioritize quality and reliability</p>
          </div>
          <div className="flex items-center gap-2">
            <CircleCheck />
            <p className="text-gray-500">We prioritize quality and reliability</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
