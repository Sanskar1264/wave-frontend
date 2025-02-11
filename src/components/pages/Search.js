import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Card } from "../ui/card";
import { ChevronDown, Filter, MapPin, Star } from "lucide-react";
import { Separator } from "../ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Slider } from "../ui/slider";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import img1 from "./../../assets/provider-19.jpg";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { Link } from "react-router-dom";

const Search = () => {
  const [value, setValue] = useState(33);
  const minValue = 0;
  const maxValue = 100;
  const handleSliderChange = (newValue) => {
    setValue(newValue[0]);
  };
  return (
    <div className="px-[3vw]">
      {/* breadcrumb */}
      <div className="mt-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Service</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* filter option */}
      <div className="mt-7 ">
        <div className="flex gap-10 flex-col lg:flex-row ">
          <div className="lg:w-[25%]  w-full">
            <Card className="p-2 sticky top-0 ">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Filter />
                  <span className="text-xl font-bold">Filters</span>
                </div>
                <p className="text-sm hover:underline cursor-pointer">
                  Reset Filter
                </p>
              </div>
              <Separator className="my-3" />
              <div>
                <span>Search by Keyword</span>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="border border-gray-300 py-2 w-full p-2 rounded-md my-3"
                />
              </div>

              <div className="mt-3">
                <Collapsible defaultOpen>
                  <CollapsibleTrigger className="text-xl font-semibold flex justify-between w-full items-center">
                    <p>Categories</p>
                    <ChevronDown />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3">
                    <div className="flex gap-2 items-center mt-2">
                      <input type="checkbox" />{" "}
                      <span className="text-gray-500">All Services</span>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <input type="checkbox" />{" "}
                      <span className="text-gray-500">
                        Home Cleaning & maintenance
                      </span>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <input type="checkbox" />{" "}
                      <span className="text-gray-500">Electrical Services</span>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <input type="checkbox" />{" "}
                      <span className="text-gray-500">Plumbing Services</span>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <input type="checkbox" />{" "}
                      <span className="text-gray-500">Appliance Repairs</span>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <input type="checkbox" />{" "}
                      <span className="text-gray-500">Home Painting</span>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <input type="checkbox" />{" "}
                      <span className="text-gray-500">
                        Carpentry & Furniture Assembly
                      </span>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <input type="checkbox" />{" "}
                      <span className="text-gray-500">Pest Control</span>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <Separator className="my-2" />

              <div>
                <Collapsible>
                  <CollapsibleTrigger className="text-xl font-semibold flex justify-between w-full items-center">
                    <p>Sub-categories</p>
                    <ChevronDown />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3">
                    <div className="flex gap-2 items-center mt-2">
                      <input type="checkbox" />{" "}
                      <span className="text-gray-500">
                        Home Cleaning & maintenance
                      </span>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <input type="checkbox" />{" "}
                      <span className="text-gray-500">
                        Home Cleaning & maintenance
                      </span>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <input type="checkbox" />{" "}
                      <span className="text-gray-500">
                        Home Cleaning & maintenance
                      </span>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <input type="checkbox" />{" "}
                      <span className="text-gray-500">
                        Home Cleaning & maintenance
                      </span>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <input type="checkbox" />{" "}
                      <span className="text-gray-500">
                        Home Cleaning & maintenance
                      </span>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <input type="checkbox" />{" "}
                      <span className="text-gray-500">
                        Home Cleaning & maintenance
                      </span>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <input type="checkbox" />{" "}
                      <span className="text-gray-500">
                        Home Cleaning & maintenance
                      </span>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <Separator className="my-2" />

              <div>
                <Collapsible defaultOpen>
                  <CollapsibleTrigger className="text-xl font-semibold flex justify-between w-full items-center">
                    <p>Location</p>
                    <ChevronDown />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-3 flex justify-between border border-gray-300 py-2 p-3 my-3 rounded-md">
                      <input
                        type="text"
                        className="border-none outline-none "
                      />
                      <MapPin />
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <Separator className="my-2" />

              <div>
                <Collapsible defaultOpen>
                  <CollapsibleTrigger className="text-xl font-semibold flex justify-between w-full items-center">
                    <p>Price Range</p>
                    <ChevronDown />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="my-3">
                    <Slider
                      defaultValue={[value]}
                      min={minValue}
                      max={maxValue}
                      step={1}
                      onAfterChange={handleSliderChange}
                    />{" "}
                    <div style={{ textAlign: "center", marginTop: "10px" }}>
                      {" "}
                      <span>Current Value: {value}</span>{" "}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <Separator className="my-2" />

              <div>
                <Collapsible defaultOpen>
                  <CollapsibleTrigger className="text-xl font-semibold flex justify-between w-full items-center">
                    <p>Rating</p>
                    <ChevronDown />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="my-3">
                    <div>
                      <div className="flex justify-between items-center ">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" />
                          <div className="flex gap-1">
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                          </div>
                        </div>
                        <p className="text-gray-500">(100)</p>
                      </div>
                      <div className="flex justify-between items-center ">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" />
                          <div className="flex gap-1">
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                          </div>
                        </div>
                        <p className="text-gray-500">(150)</p>
                      </div>
                      <div className="flex justify-between items-center ">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" />
                          <div className="flex gap-1">
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                          </div>
                        </div>
                        <p className="text-gray-500">(70)</p>
                      </div>
                      <div className="flex justify-between items-center ">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" />
                          <div className="flex gap-1">
                            <StarFilledIcon />
                            <StarFilledIcon />
                          </div>
                        </div>
                        <p className="text-gray-500">(40)</p>
                      </div>
                      <div className="flex justify-between items-center ">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" />
                          <div className="flex gap-1">
                            <StarFilledIcon />
                          </div>
                        </div>
                        <p className="text-gray-500">(30)</p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <Button className="my-5 w-full uppercase font-bold">
                Search
              </Button>
            </Card>
          </div>

          <div className="lg:w-[80%] w-full">
            <div className="flex justify-between items-center">
              <div>
                <p className="lg:text-2xl font-bold text-lg">
                  Found <span className="text-gradient ">10 Services</span>
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <p>Sort</p>
                <select className="border border-gray-300 py-2 rounded-md ">
                  <option value="" key="">
                    Price low to high
                  </option>
                  <option value="" key="">
                    Price high to low
                  </option>
                </select>
              </div>
            </div>
            {/* card  */}
            <div className="flex gap-7 flex-wrap my-5">
              <Card className="lg:w-[30%] p-3 w-full">
                <Link to="/service_details">
                  {" "}
                  <img src={img1} alt="" className="rounded-md" />
                </Link>
                <p className="truncate text-xl my-2 text-gray-800 ">
                  Home cleaning & maintenance
                </p>
                <div className="flex items-center gap-2">
                  <StarFilledIcon className="text-gradient" />
                  <p>4.8</p>
                  <p>(120)</p>
                </div>
                <div className="my-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold ">₹399</p>
                    <span className="text-lg line-through text-gray-500 ">
                      ₹799
                    </span>
                  </div>
                  <Link to='/cart'>
                    <Button className="bg-transparent border border-black text-black hover:text-white font-bold">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </Card>
              <Card className="lg:w-[30%] p-3 w-full">
                <img src={img1} alt="" className="rounded-md" />
                <p className="truncate text-xl my-2 text-gray-800 ">
                  Home cleaning & maintenance
                </p>
                <div className="flex items-center gap-2">
                  <StarFilledIcon className="text-gradient" />
                  <p>4.8</p>
                  <p>(120)</p>
                </div>
                <div className="my-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold ">₹399</p>
                    <span className="text-lg line-through text-gray-500 ">
                      ₹799
                    </span>
                  </div>
                  <Button className="bg-transparent border border-black text-black hover:text-white font-bold">
                    Book Now
                  </Button>
                </div>
              </Card>
              <Card className="lg:w-[30%] p-3 w-full">
                <img src={img1} alt="" className="rounded-md" />
                <p className="truncate text-xl my-2 text-gray-800 ">
                  Home cleaning & maintenance
                </p>
                <div className="flex items-center gap-2">
                  <StarFilledIcon className="text-gradient" />
                  <p>4.8</p>
                  <p>(120)</p>
                </div>
                <div className="my-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold ">₹399</p>
                    <span className="text-lg line-through text-gray-500 ">
                      ₹799
                    </span>
                  </div>
                  <Button className="bg-transparent border border-black text-black hover:text-white font-bold">
                    Book Now
                  </Button>
                </div>
              </Card>
              <Card className="lg:w-[30%] p-3 w-full">
                <img src={img1} alt="" className="rounded-md" />
                <p className="truncate text-xl my-2 text-gray-800 ">
                  Home cleaning & maintenance
                </p>
                <div className="flex items-center gap-2">
                  <StarFilledIcon className="text-gradient" />
                  <p>4.8</p>
                  <p>(120)</p>
                </div>
                <div className="my-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold ">₹399</p>
                    <span className="text-lg line-through text-gray-500 ">
                      ₹799
                    </span>
                  </div>
                  <Button className="bg-transparent border border-black text-black hover:text-white font-bold">
                    Book Now
                  </Button>
                </div>
              </Card>
              <Card className="lg:w-[30%] p-3 w-full">
                <img src={img1} alt="" className="rounded-md" />
                <p className="truncate text-xl my-2 text-gray-800 ">
                  Home cleaning & maintenance
                </p>
                <div className="flex items-center gap-2">
                  <StarFilledIcon className="text-gradient" />
                  <p>4.8</p>
                  <p>(120)</p>
                </div>
                <div className="my-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold ">₹399</p>
                    <span className="text-lg line-through text-gray-500 ">
                      ₹799
                    </span>
                  </div>
                  <Button className="bg-transparent border border-black text-black hover:text-white font-bold">
                    Book Now
                  </Button>
                </div>
              </Card>
              <Card className="lg:w-[30%] p-3 w-full">
                <img src={img1} alt="" className="rounded-md" />
                <p className="truncate text-xl my-2 text-gray-800 ">
                  Home cleaning & maintenance
                </p>
                <div className="flex items-center gap-2">
                  <StarFilledIcon className="text-gradient" />
                  <p>4.8</p>
                  <p>(120)</p>
                </div>
                <div className="my-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold ">₹399</p>
                    <span className="text-lg line-through text-gray-500 ">
                      ₹799
                    </span>
                  </div>
                  <Button className="bg-transparent border border-black text-black hover:text-white font-bold">
                    Book Now
                  </Button>
                </div>
              </Card>
              <Card className="lg:w-[30%] p-3 w-full">
                <img src={img1} alt="" className="rounded-md" />
                <p className="truncate text-xl my-2 text-gray-800 ">
                  Home cleaning & maintenance
                </p>
                <div className="flex items-center gap-2">
                  <StarFilledIcon className="text-gradient" />
                  <p>4.8</p>
                  <p>(120)</p>
                </div>
                <div className="my-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold ">₹399</p>
                    <span className="text-lg line-through text-gray-500 ">
                      ₹799
                    </span>
                  </div>
                  <Button className="bg-transparent border border-black text-black hover:text-white font-bold">
                    Book Now
                  </Button>
                </div>
              </Card>
              <Card className="lg:w-[30%] p-3 w-full">
                <img src={img1} alt="" className="rounded-md" />
                <p className="truncate text-xl my-2 text-gray-800 ">
                  Home cleaning & maintenance
                </p>
                <div className="flex items-center gap-2">
                  <StarFilledIcon className="text-gradient" />
                  <p>4.8</p>
                  <p>(120)</p>
                </div>
                <div className="my-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold ">₹399</p>
                    <span className="text-lg line-through text-gray-500 ">
                      ₹799
                    </span>
                  </div>
                  <Button className="bg-transparent border border-black text-black hover:text-white font-bold">
                    Book Now
                  </Button>
                </div>
              </Card>
              <Card className="lg:w-[30%] p-3 w-full">
                <img src={img1} alt="" className="rounded-md" />
                <p className="truncate text-xl my-2 text-gray-800 ">
                  Home cleaning & maintenance
                </p>
                <div className="flex items-center gap-2">
                  <StarFilledIcon className="text-gradient" />
                  <p>4.8</p>
                  <p>(120)</p>
                </div>
                <div className="my-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold ">₹399</p>
                    <span className="text-lg line-through text-gray-500 ">
                      ₹799
                    </span>
                  </div>
                  <Button className="bg-transparent border border-black text-black hover:text-white font-bold">
                    Book Now
                  </Button>
                </div>
              </Card>
            </div>
            {/* pagination */}
            <div className="flex justify-center items-center my-10">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem className="border border-gray-300 rounded-md font-bold bg-black text-white">
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
