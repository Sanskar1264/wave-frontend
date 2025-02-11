import React from "react";
import slider1 from "./../../assets/slider1.png";
import slider2 from "./../../assets/slider2.png";
import slider3 from "./../../assets/slider3.png";
import electrician from "./../../assets/electrician.png";
import cleaning from "./../../assets/cleaning.png";
import plumber from "./../../assets/plumber.png";
import painting from "./../../assets/painting.png";
import carpenter from "./../../assets/carpenter.png";
import ac from "./../../assets/ac.png";
import { Button } from "../ui/button";
import {
  BookCheck,
  CircleCheckBig,
  NotebookPen,
  ShieldCheck,
  Star,
  UserCheck,
  UserRound,
} from "lucide-react";
import pest from "./../../assets/pest-control.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { LocateFixed, MapPin, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import cleaning_service1 from "./../../assets/service-48.png";
import cleaning_service2 from "./../../assets/service-49.png";
import cleaning_service3 from "./../../assets/service-61.png";
import discount2 from "./../../assets/discount1 (2).webp";
import discount3 from "./../../assets/discount1 (3).webp";
import { Card, CardContent, CardFooter } from "../ui/card";
import NumberTicker from "../ui/number-ticker";
import avatar1 from "./../../assets/avatar-06.jpg";
import avatar2 from "./../../assets/avatar-07.jpg";
import avatar3 from "./../../assets/avatar-16.jpg";
import avatar4 from "./../../assets/avatar-17.jpg";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Link, useNavigate } from "react-router-dom";
// import download from "./.././../../assets/app_qr (1).png
import qr from "./../../assets/app_qr.png";
import download from "./../../assets/download_app.webp";

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search");
  };
  const reviews = [
    {
      id: 1,
      username: "happy_camper",
      rating: 5,
      title: "Amazing Product!",
      content:
        "This product exceeded my expectations. The quality is top-notch and the customer service was outstanding.",
      timestamp: "2024-11-06T12:00:00Z",
    },
    {
      id: 2,
      username: "jane_doe",
      rating: 4,
      title: "Great Value for Money",
      content:
        "Good quality for the price. It performs well and has a sleek design. Would recommend to others.",
      timestamp: "2024-11-06T12:10:00Z",
    },
    {
      id: 3,
      username: "john_smith",
      rating: 3,
      title: "Decent but Not Perfect",
      content:
        "The product is okay for the most part, but I experienced a few minor issues. Customer service was helpful in resolving them.",
      timestamp: "2024-11-06T12:20:00Z",
    },
    {
      id: 4,
      username: "tech_guru",
      rating: 2,
      title: "Not as Expected",
      content:
        "The product didn't work as advertised. It has some features, but lacks the key functionalities I needed.",
      timestamp: "2024-11-06T12:30:00Z",
    },
    {
      id: 5,
      username: "buyer_beware",
      rating: 1,
      title: "Very Disappointed",
      content:
        "Completely dissatisfied with the purchase. The product broke within a week and the return policy is a hassle.",
      timestamp: "2024-11-06T12:40:00Z",
    },
  ];

  return (
    <div className="z-10 pt-[69.6px] overflow-hidden">
      <div className="flex items-center px-[5vw] justify-center gap-4 mt-5 border-b  bg-gray-50  shadow-xl overflow-y-scroll ">
        <Link to="/search">
          <div className="w-32 flex flex-col justify-center items-center hover:bg-gray-50 rounded-full py-4 cursor-pointer px-[10vw] lg:px-0">
            <img src={cleaning} alt="" className="w-10" />
            <h1 className="text-md leading-normal opacity-80 truncate">
              Cleaning
            </h1>
            <p className="text-[10px] text-gray-500">10 Listing</p>
          </div>
        </Link>
        <Link to="/search">
          <div className="w-32 flex flex-col justify-center items-center hover:bg-gray-50 rounded-full py-4 cursor-pointer">
            <img src={plumber} alt="" className="w-10" />
            <h1 className="text-md leading-normal opacity-80 truncate">
              Plumber
            </h1>
            <p className="text-[10px] text-gray-500">7 Listing</p>
          </div>
        </Link>
        <div className="w-32 flex flex-col justify-center items-center hover:bg-gray-50 rounded-full py-4 cursor-pointer">
          <img src={electrician} alt="" className="w-10" />
          <h1 className="text-md leading-normal opacity-80 truncate">
            Electrician
          </h1>
          <p className="text-[10px] text-gray-500">15 Listing</p>
        </div>
        <div className="w-32 flex flex-col justify-center items-center hover:bg-gray-50 rounded-full py-4 cursor-pointer">
          <img src={painting} alt="" className="w-10" />
          <h1 className="text-md leading-normal opacity-80 truncate">
            Painting
          </h1>
          <p className="text-[10px] text-gray-500">8 Listing</p>
        </div>
        <div className="w-32  flex flex-col justify-center items-center hover:bg-gray-50 rounded-full py-4 cursor-pointer">
          <img src={carpenter} alt="" className="w-10" />
          <h1 className="text-md leading-normal opacity-80 truncate">
            Carpenter
          </h1>
          <p className="text-[10px] text-gray-500">12 Listing</p>
        </div>
        <div className="w-32 flex flex-col justify-center items-center hover:bg-gray-50 rounded-full py-4 cursor-pointer">
          <img src={ac} alt="" className="w-10" />
          <h1 className="text-md leading-normal opacity-80 truncate">
            AC Repair
          </h1>
          <p className="text-[10px] text-gray-500">12 Listing</p>
        </div>
        <div className="w-32 flex flex-col justify-center items-center hover:bg-gray-50 rounded-full py-4 cursor-pointer">
          <img src={pest} alt="" className="w-10" />
          <h1 className="text-md leading-normal opacity-80 truncate">
            Pest Control
          </h1>
          <p className="text-[10px] text-gray-500">9 Listing</p>
        </div>
      </div>

      <div className="flex lg:justify-center px-[5vw]  lg:items-center lg:gap-10 gradient flex-col gap-5  lg:flex-row py-7">
        <div className="space-y-5 lg:w-[50%] w-[100%] order-2 lg:order-1">
          <h1 className="lg:text-4xl font-bold text-white text-2xl">
            Your Home, Our Expertise: Quality Services at Your Doorstep!
          </h1>

          <div className="flex lg:gap-1 lg:flex-row flex-col gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <div className="flex rounded-md p-2 items-center h-10 gap-3 group">
                    <MapPin className="opacity-80 " />
                    <input
                      type="text"
                      className="border-none outline-none rounded-md bg-transparent group-hover:bg-transparent"
                      placeholder="Select City"
                    />
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Search your Location</DialogTitle>
                  <DialogDescription>
                    <input
                      type="text"
                      placeholder="Search for your location"
                      className="border border-gray-300 mt-5 w-full py-2 rounded-md p-3"
                    />
                    <div className="flex gap-3 mt-10 font-bold hover:underline cursor-pointer">
                      <LocateFixed />
                      Use Current Location
                    </div>
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4"></div>
                  <div className="grid grid-cols-4 items-center gap-4"></div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <div className="flex border border-gray-300 rounded-md p-2 lg:w-80 items-center h-10 bg-white justify-between w-full">
              <div className="flex items-center gap-3 ">
                <input
                  type="text"
                  className="border-none outline-none rounded-md"
                  placeholder="Search Services..."
                />
              </div>
              <Search
                className="cursor-pointer w-6 h-6"
                onClick={handleSearch}
              />
            </div>
          </div>

          <div className="flex items-center text-white gap-3">
            <h1 className="text-white  text-lg">Popular Searches :</h1>
            <span className="bg-gray-300 text-black  p-1 rounded-2xl px-2 text-md hover:bg-gray-200">
              Plumber
            </span>
            <span className="bg-gray-300 text-black p-1 rounded-2xl px-2 text-md hover:bg-gray-200">
              Interior
            </span>
            <span className="bg-gray-300 text-black p-1 rounded-2xl px-2 text-md hover:bg-gray-200 truncate">
              AC repairing
            </span>
          </div>

          <p className="text-white text-sm opacity-80">
            Unlock a World of Convenience: Discover Trusted Services That Make
            Your Life Easier, Right at Your Fingertips
          </p>
          <div className="flex gap-4 pb-4 lg:pb-0 flex-wrap ">
            <div className="flex w-40 gap-1 items-center ">
              <UserCheck className="text-white w-10 h-10" />
              <div className="flex flex-col">
                <h1 className="font-bold text-white">
                  <NumberTicker value={20} />+
                </h1>
                <p className="text-white opacity-80 text-sm ">
                  Verified Provider
                </p>
              </div>
            </div>
            <div className="flex w-40 gap-1 items-center">
              <ShieldCheck className="text-white w-10 h-10" />
              <div className="flex flex-col">
                <h1 className="font-bold text-white">
                  <NumberTicker value={150} />+
                </h1>
                <p className="text-white text-sm opacity-80 truncate">
                  Service Completed
                </p>
              </div>
            </div>
            <div className="flex w-40 gap-1 items-center">
              <Star className="text-white w-10 h-10" />
              <div className="flex flex-col">
                <h1 className="font-bold text-white">
                  <NumberTicker value={100} />+
                </h1>
                <p className="text-white text-sm opacity-80 ">
                  Reviews Globally
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] w-[100%] order-1 lg:order-2">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <img src={slider1} alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src={slider2} alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src={slider3} alt="" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="bg-[#FBFBFB] py-5 overflow-hidden">
        <h1 className="text-center text-4xl mt-6 mb-2 font-bold">
          Explore<span className="text-gradient"> Services</span>
        </h1>
        <p className="text-center mb-3 text-gray-500 text-sm">
          Service categories help organize and structure the offerings on a
          marketplace, making it easier for users to find what they need.
        </p>

        <div className="px-[5vw] flex justify-between items-center">
          <h1 className="text-2xl truncate font-bold">
            Home Cleaning & <span className="text-gradient">maintenance</span>
          </h1>
          <p className="text-black font-bold cursor-pointer text-[12px] truncate">
            View All
          </p>
        </div>

        <div className="overflow-hidden px-[2vw] lg:px-0">
          <div className=" flex justify-center items-center mt-4 rounded-md gap-3 overflow-y-scroll ">
            <Card className="p-2 ">
              <div className="w-[200px] overflow-hidden rounded-md">
                <img
                  src={cleaning_service1}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500 "
                />
              </div>
              <p className="mt-2  truncate">Deep home cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service2}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Bathroom cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service3}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Kitchen cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service2}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Water tank cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service1}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Sofa cleaning</p>
              <div className="flex justify-between items-center ">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="px-[5vw] flex justify-between items-center mt-5">
          <h1 className="text-2xl font-bold">
            Electrical <span className="text-gradient">services</span>
          </h1>
          <p className="text-black font-bold cursor-pointer text-[12px]">
            View All
          </p>
        </div>

        <div className="overflow-hidden px-[2vw] lg:px-0">
          <div className=" flex justify-center items-center mt-4 rounded-md gap-3 overflow-y-scroll ">
            <Card className="p-2 ">
              <div className="w-[200px] overflow-hidden rounded-md">
                <img
                  src={cleaning_service1}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500 "
                />
              </div>
              <p className="mt-2  truncate">Deep home cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service2}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Bathroom cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service3}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Kitchen cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service2}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Water tank cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service1}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Sofa cleaning</p>
              <div className="flex justify-between items-center ">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="px-[5vw] flex justify-between items-center mt-5">
          <h1 className="text-2xl font-bold">
            Plumbing <span className="text-gradient">services</span>
          </h1>
          <p className="text-black font-bold cursor-pointer text-[12px]">
            View All
          </p>
        </div>

        <div className="overflow-hidden px-[2vw] lg:px-0">
          <div className=" flex justify-center items-center mt-4 rounded-md gap-3 overflow-y-scroll ">
            <Card className="p-2 ">
              <div className="w-[200px] overflow-hidden rounded-md">
                <img
                  src={cleaning_service1}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500 "
                />
              </div>
              <p className="mt-2  truncate">Deep home cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service2}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Bathroom cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service3}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Kitchen cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service2}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Water tank cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service1}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Sofa cleaning</p>
              <div className="flex justify-between items-center ">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="w-[100%] px-[5vw] my-10">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <img src={discount3} alt="" className="w-full h-[300px]" />
            </CarouselItem>
            <CarouselItem>
              <img src={discount2} alt="" className="w-full h-[300px]" />
            </CarouselItem>
            <CarouselItem>
              <img src={discount3} alt="" className="w-full h-[300px]" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="bg-gray-50">
        <div className="px-[5vw] flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Appliction <span className="text-gradient">repairs</span>
          </h1>
          <p className="text-black font-bold cursor-pointer text-[12px]">
            View All
          </p>
        </div>

        <div className="overflow-hidden px-[2vw] lg:px-0">
          <div className=" flex justify-center items-center mt-4 rounded-md gap-3 overflow-y-scroll ">
            <Card className="p-2 ">
              <div className="w-[200px] overflow-hidden rounded-md">
                <img
                  src={cleaning_service1}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500 "
                />
              </div>
              <p className="mt-2  truncate">Deep home cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service2}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Bathroom cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service3}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Kitchen cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service2}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Water tank cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service1}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Sofa cleaning</p>
              <div className="flex justify-between items-center ">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="px-[5vw] flex justify-between items-center mt-5 ">
          <h1 className="text-2xl font-bold">
            Home <span className="text-gradient">painting</span>
          </h1>
          <p className="text-black font-bold cursor-pointer text-[12px]">
            View All
          </p>
        </div>
        <div className="overflow-hidden px-[2vw] lg:px-0">
          <div className=" flex justify-center items-center mt-4 rounded-md gap-3 overflow-y-scroll ">
            <Card className="p-2 ">
              <div className="w-[200px] overflow-hidden rounded-md">
                <img
                  src={cleaning_service1}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500 "
                />
              </div>
              <p className="mt-2  truncate">Deep home cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service2}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Bathroom cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service3}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Kitchen cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service2}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Water tank cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service1}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Sofa cleaning</p>
              <div className="flex justify-between items-center ">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>
          </div>
        </div>
        <div className="px-[5vw] flex justify-between items-center mt-5">
          <h1 className="text-2xl font-bold">
            Carpentry &{" "}
            <span className="text-gradient">Furniture Assembly</span>
          </h1>
          <p className="text-black font-bold cursor-pointer text-[12px]">
            View All
          </p>
        </div>
        <div className="overflow-hidden px-[2vw] lg:px-0">
          <div className=" flex justify-center items-center mt-4 rounded-md gap-3 overflow-y-scroll ">
            <Card className="p-2 ">
              <div className="w-[200px] overflow-hidden rounded-md">
                <img
                  src={cleaning_service1}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500 "
                />
              </div>
              <p className="mt-2  truncate">Deep home cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service2}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Bathroom cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service3}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Kitchen cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service2}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Water tank cleaning</p>
              <div className="flex justify-between items-center">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>

            <Card className="p-2">
              <div className="w-[200px] overflow-hidden">
                <img
                  src={cleaning_service1}
                  alt=""
                  className="w-[200px] rounded-md hover:scale-110 duration-500"
                />
              </div>
              <p className="mt-2  truncate">Sofa cleaning</p>
              <div className="flex justify-between items-center ">
                <p className="text-[12px] text-gray-500">
                  Service starts at Rs 400/-
                </p>
                <p className="flex gap-1 items-center text-[12px] text-gray-500">
                  <Star className="w-3 h-3 text-[#fd2692]" />
                  4.5
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="gradient h-[150px] my-10 flex justify-between items-center w-full ">
        <div className="flex lg:justify-between lg:items-center px-[5vw] w-full flex-col lg:flex-row  ">
          <div className="">
            <p className="text-white">Become a Service Provider</p>
            <h1 className="text-4xl text-white">
              Post your service in a minute
            </h1>
          </div>
          <Button className="bg-black opacity-80">
            <UserRound />
            Join Us
          </Button>
        </div>
      </div>

      {/* <div className="">
        <h1 className="text-2xl text-center">
          Popular <span className="text-gradient">Providers</span>
        </h1>
        <p className="text-center text-gray-500">
          Each listing is designed to be clear and concise, providing customers
        </p>
        <div className="flex flex-wrap justify-center items-center my-5">
          <div className="border border-gray-300 flex gap-2 p-2">
            <img src={avatar1} alt="" className="rounded-full w-20" />
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold opacity-70">Hendry Thompson</h1>
              <p className="flex items-center gap-1 text-gray-500 text-sm">
                <Star className="h-4 w-4 text-pink-700" /> 4.4 (120 reviews)
              </p>
              <p className="text-sm text-gray-500">
                10 Services, From{" "}
                <span className="font-semibold">Rs 399/-</span>
              </p>
            </div>
          </div>
          <div className="border border-gray-300 flex gap-2 p-2">
            <img src={avatar2} alt="" className="rounded-full w-20" />
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold  opacity-70">Hendry Thompson</h1>
              <p className="flex items-center gap-1 text-gray-500 text-sm">
                <Star className="h-4 w-4 text-pink-700" /> 4.4 (120 reviews)
              </p>
              <p className="text-sm text-gray-500">
                10 Services, From{" "}
                <span className="font-semibold">Rs 399/-</span>
              </p>
            </div>
          </div>
          <div className="border border-gray-300 flex gap-2 p-2">
            <img src={avatar3} alt="" className="rounded-full w-20" />
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold  opacity-70">Hendry Thompson</h1>
              <p className="flex items-center gap-1 text-gray-500 text-sm">
                <Star className="h-4 w-4 text-pink-700" /> 4.4 (120 reviews)
              </p>
              <p className="text-sm text-gray-500">
                10 Services, From{" "}
                <span className="font-semibold">Rs 399/-</span>
              </p>
            </div>
          </div>
          <div className="border border-gray-300 flex gap-2 p-2">
            <img src={avatar4} alt="" className="rounded-full w-20" />
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold opacity-70">Hendry Thompson</h1>
              <p className="flex items-center gap-1 text-gray-500 text-sm">
                <Star className="h-4 w-4 text-pink-700" /> 4.4 (120 reviews)
              </p>
              <p className="text-sm text-gray-500">
                10 Services, From{" "}
                <span className="font-semibold">Rs 399/-</span>
              </p>
            </div>
          </div>
          <div className="border border-gray-300 flex gap-2 p-2">
            <img src={avatar1} alt="" className="rounded-full w-20" />
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold  opacity-70">Hendry Thompson</h1>
              <p className="flex items-center gap-1 text-gray-500 text-sm">
                <Star className="h-4 w-4 text-pink-700" /> 4.4 (120 reviews)
              </p>
              <p className="text-sm text-gray-500">
                10 Services, From{" "}
                <span className="font-semibold">Rs 399/-</span>
              </p>
            </div>
          </div>
          <div className="border border-gray-300 flex gap-2 p-2">
            <img src={avatar2} alt="" className="rounded-full w-20" />
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold  opacity-70">Hendry Thompson</h1>
              <p className="flex items-center gap-1 text-gray-500 text-sm">
                <Star className="h-4 w-4 text-pink-700" /> 4.4 (120 reviews)
              </p>
              <p className="text-sm text-gray-500">
                10 Services, From{" "}
                <span className="font-semibold">Rs 399/-</span>
              </p>
            </div>
          </div>
          <div className="border border-gray-300 flex gap-2 p-2">
            <img src={avatar3} alt="" className="rounded-full w-20" />
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold  opacity-70">Hendry Thompson</h1>
              <p className="flex items-center gap-1 text-gray-500 text-sm">
                <Star className="h-4 w-4 text-pink-700" /> 4.4 (120 reviews)
              </p>
              <p className="text-sm text-gray-500">
                10 Services, From{" "}
                <span className="font-semibold">Rs 399/-</span>
              </p>
            </div>
          </div>
          <div className="border border-gray-300 flex gap-2 p-2">
            <img src={avatar1} alt="" className="rounded-full w-20" />
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold  opacity-70">Hendry Thompson</h1>
              <p className="flex items-center gap-1 text-gray-500 text-sm">
                <Star className="h-4 w-4 text-pink-700" /> 4.4 (120 reviews)
              </p>
              <p className="text-sm text-gray-500">
                10 Services, From{" "}
                <span className="font-semibold">Rs 399/-</span>
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-black my-10">
        <div className="py-10">
          <h1 className="text-3xl text-center  text-white ">
            How Wave <span className="text-gradient">works</span>
          </h1>
          <p className="text-center pb-7 text-gray-300">
            Each listing is designed to be clear and concise, providing
            customers
          </p>
          <div className="flex lg:justify-center lg:items-center gap-5 flex-col lg:flex-row">
            <div className="w-[350px] flex flex-col justify-center items-center space-y-2 text-center">
              <NotebookPen className="text-white h-8 w-8" />
              <h1 className="text-white text-xl font-semibold">
                1. Post a Service
              </h1>
              <p className="text-gray-300">
                After you post a job, our matching system identifies and alerts
                relevant Provider, who can then express interest in your job.
              </p>
            </div>
            <div className="w-[350px] flex flex-col justify-center items-center space-y-2 text-center">
              <BookCheck className="text-white h-8 w-8" />
              <h1 className="text-white text-xl font-semibold">
                2. Getting Booked & Job done
              </h1>
              <p className="text-gray-300">
                After you post a job, our matching system identifies and alerts
                relevant Provider, who can then express interest in your job.
              </p>
            </div>
            <div className="w-[350px] flex flex-col justify-center items-center space-y-2 text-center">
              <NotebookPen className="text-white h-8 w-8" />
              <h1 className="text-white text-xl font-semibold">
                3. Get Reviewd & Get Leads
              </h1>
              <p className="text-gray-300">
                After you post a job, our matching system identifies and alerts
                relevant Provider, who can then express interest in your job.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className="text-3xl text-center ">
            Reviews from our <span className="text-gradient">Customers</span>
          </h1>
          <p className="text-center pb-7 text-gray-500">
            Each listing is designed to be clear and concise, providing
            customers
          </p>
          <div className="px-[5vw] ">
            <Carousel className="w-ful">
              <CarouselContent className="-ml-1">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-80" // Ensure the item takes full width
                  >
                    <div className="p-1 mb-10 ">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-start p-6 flex-col  h-[200px] w-full">
                          <span className="text-xl font-semibold">
                            {review.title}
                          </span>
                          <p className="text-sm text-gray-500 my-3">
                            "{review.content}"
                          </p>
                          <p className="flex justify-start items-center gap-1">
                            Rating-
                            <StarFilledIcon className="text-green-900" />
                            <StarFilledIcon className="text-green-900" />
                            <StarFilledIcon className="text-green-900" />
                            <StarFilledIcon className="text-green-900" />
                          </p>
                        </CardContent>
                        <CardFooter>
                          <div className="flex justify-between items-center gap-10">
                            <div className="flex gap-2 items-center font-bold capitalize ">
                              <img
                                src={avatar1}
                                alt=""
                                className="rounded-full w-12"
                              />
                              <h1>{review.username}</h1>
                            </div>
                            <p className="text-gray-500 text-[10px] truncate">
                              3 days ago
                            </p>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>

      <div className="px-[5vw] my-10 flex justify-center items-center gap-20 flex-col lg:flex-row">
        <img src={download} alt="" />
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Get Things Done Easily. Download the Wave App Today!
          </h1>
          <p className="text-md text-gray-600">
            Book appointments, manage projects, and stay connected with service
            providers - all on the go!
          </p>
          <div>
            <div className="space-y-2">
              <span className="flex gap-3 text-md">
                <CircleCheckBig className="text-green-600" /> Easy booking and
                appointment scheduling
              </span>
              <span className="flex gap-3 text-md">
                <CircleCheckBig className="text-green-600" /> Secure online
                payments
              </span>
              <span className="flex gap-3 text-md">
                <CircleCheckBig className="text-green-600" /> Manage
                communication with service providers
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex gap-5 items-center">
              <img src={qr} alt="" className="w-28 rounded-md border-4 border-gray-200"/>
              <div>
                <p className="text-gray-500">Scan to Download</p>
                <h2 className="font-bold text-2xl">iOS & Android</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
