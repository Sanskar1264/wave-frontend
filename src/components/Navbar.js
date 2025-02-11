import React from "react";
import logo from "./../assets/logo.png";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import avatar from "./../assets/avatar-16.jpg";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="px-[2vw] flex items-center justify-between shadow-md fixed w-ful z-50  py-2 overflow-hidden top-0 left-0 bg-[#f0f0f0] w-full">
      <Link to="/">
        <img src={logo} alt="" className="w-[75px]" />
      </Link>

      <div className="flex items-center gap-5 mt-">
        <div className="flex gap-4">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/search">
            <p>Service</p>
          </Link>
          <Link to="/about_us">
            <p>About Us</p>
          </Link>
          <Link to="/contact_us">
            <p>Contact Us</p>
          </Link>
        </div>
        <Link to="/login">
          <Button className="h-8 gradient">SIGN IN</Button>
        </Link>
        <Link to="/join_us">
          <Button className="bg-white text-black hover:bg-white h-8 gradient-border ">
            JOIN US
          </Button>
        </Link>

        {/* <Popover>
          <PopoverTrigger>
            <Bell />
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-4">
              <p className="flex gap-2 justify-start cursor-pointer hover:bg-gray-50 p-1">
                <Mail className="size-12" />
                <span className="text-[12px] font-light">
                  Your booking for Home cleaning & maintenance on 15th Nov 2024
                  has been successfully confirmed. Booking ID: 276398
                </span>
              </p>
              <Separator />
              <p className="flex gap-2 justify-start cursor-pointer hover:bg-gray-50 p-1">
                <Mail className="size-12" />
                <span className="text-[12px] font-light">
                  Your booking for Home cleaning & maintenance on 15th Nov 2024
                  has been successfully confirmed. Booking ID: 276398
                </span>
              </p>
              <Separator />
              <p className="flex gap-2 cursor-pointer hover:bg-gray-50 p-1">
                <Mail className="size-12" />
                <span className="text-[12px] font-normal ">
                  Your booking for Home cleaning & maintenance on 15th Nov 2024
                  has been successfully confirmed. Booking ID: 276398
                </span>
              </p>
              <Separator />
              <Link
                to="/notification"
                className="flex justify-center items-center"
              >
                {" "}
                <span className="text-center text-gray-500 text-sm hover:font-bold hover:text-black">
                  View All
                </span>
              </Link>
            </div>
          </PopoverContent>
        </Popover> */}

        <Link to="/cart">
          <ShoppingCart />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <img src={avatar} alt="" className="size-12 rounded-full" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            {/* <Link to='/booking_list'><DropdownMenuItem>Booking</DropdownMenuItem></Link> */}
            <Link to="/booking_list">
              <DropdownMenuItem>Booking</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Setting</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
