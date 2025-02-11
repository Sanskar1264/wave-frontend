import React from "react";
import logo from "./../assets/logo-dark.jpg";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import app from "./../assets/app-store.svg";
import store from "./../assets/google-play.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-black px-[5vw]">
        <div className="px-[2vw] py-7">
          <div>
            <img src={logo} alt="" className="w-20" />
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-1 text-white my-5 gap-5">
            <div className="space-y-2">
              <h1 className="font-bold text-lg">Company</h1>
              <p className="text-gray-300">About Us</p>
              <p className="text-gray-300">Terms & Condition</p>
              <p className="text-gray-300">Privacy Policy</p>
              <p className="text-gray-300">Anti-discrimination policy </p>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-lg">Quick Links</h1>
              <p className="text-gray-300">Home</p>
              <p className="text-gray-300">Services</p>
              <p className="text-gray-300">Cart</p>
              <p></p>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-lg">For Customers</h1>
              <p className="text-gray-300">Wave Reviews</p>
              <p className="text-gray-300">Services near you </p>
              <p className="text-gray-300">Contact Us</p>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-lg">For Service Providers</h1>
              <p className="text-gray-300">Register as professionals</p>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-lg">Follow Us</h1>
              <div className="flex items-center gap-4 mt-5">
                <div className="bg-white p-2 rounded-full hover:-translate-y-1 duration-300">
                  <Facebook className="text-black w-5 h-5" />
                </div>
                <div className="bg-white p-2 rounded-full hover:-translate-y-1 duration-300">
                  <Youtube className="text-black w-5 h-5" />
                </div>
                <div className="bg-white p-2 rounded-full hover:-translate-y-1 duration-300">
                  <Twitter className="text-black w-5 h-5" />
                </div>
                <div className="bg-white p-2 rounded-full hover:-translate-y-1 duration-300">
                  <Instagram className="text-black w-5 h-5" />
                </div>
              </div>
              <div className="flex gap-2">
                <img src={store} alt="" className="w-24 h-16 hover:scale-105 duration-300" />
                <img src={app} alt="" className="w-24 h-16 hover:scale-105 duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm  border-t border-gray-500 bg-black opacity-95">
        <h3 className="py-7 text-gray-300">
          © Copyright 2024 <span className="font-bold text-md">Wave</span>. All
          rights reserved.{" "}
        </h3>
      </div>
    </div>
  );
};

export default Footer;
