import React from "react";
import { Card } from "../ui/card";
import img from "./../../assets/provider-19.jpg";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Separator } from "../ui/separator";
import { CalendarCheck, LocateFixed, MessageCircleMore } from "lucide-react";
import { Link } from "react-router-dom";

const BookingList = () => {
  return (
    <div className="px-[10vw] mt-28">
      <div className="flex justify-between items-center my-5 ">
        <h1 className="text-2xl font-semibold">Booking List</h1>
        <div className="flex gap-2 items-center">
          <span>Sort</span>
          <select className="border border-gray-300 rounded-md p-2">
            <option value="newest" key="">
              Newest
            </option>
            <option value="oldest" key="">
              Oldest
            </option>
          </select>
        </div>
      </div>
      <div>
        <Card className="p-3  my-3 flex justify-between items-center flex-col lg:flex-row lg:gap-0 gap-5">
          <div className="flex gap-5 items-center flex-col lg:flex-row">
            <img src={img} alt="" className="w-40 rounded-md" />
            <div>
              <h1 className="font-semibold text-md">
                Home Cleaning & maintenance
                <span className="bg-green-400 text-white p-1 rounded-md ml-3 text-[10px]">
                  Completed
                </span>
              </h1>
              <p className="text-[16px]">
                <span className="w-40 text-gray-500">Booking Date :</span> 27
                Sep, 17:00-18:00
              </p>
              <p className="text-[16px]">
                <span className="w-32 text-gray-500">Booking ID :</span> 127654
              </p>
              <p className="text-[16px]">
                <span className="w-32 text-gray-500">Amount :</span>₹399{" "}
                <span className="bg-green-50 text-green-600 text-[12px] h-6 ml-4">
                  COD
                </span>
              </p>
              <p className="text-[16px]">
                <span className="w-32 text-gray-500">Provider :</span> John Doe
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Button className="bg-white text-black border border-black hover:text-white">
              <CalendarCheck /> Book Again
            </Button>
            <Dialog>
              <DialogTrigger>
                <Button className="bg-white text-black border border-black hover:text-white">
                  <MessageCircleMore /> Add a review
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="mb-5">Write A Review</DialogTitle>
                  <DialogDescription>
                    <Separator className="mb-5" />
                    <div className="flex gap-5 items-center">
                      <img src={img} alt="" className="w-20 rounded-md" />
                      <div>
                        <h1>Home cleaning & maintenance</h1>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                    <div className="my-5 flex justify-between items-center">
                      <h3 className="text-black">Rate The Service</h3>
                      <div class="flex flex-row-reverse justify-end items-center">
                        <input
                          id="hs-ratings-readonly-1"
                          type="radio"
                          class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                          name="hs-ratings-readonly"
                          value="1"
                        />
                        <label
                          for="hs-ratings-readonly-1"
                          class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-neutral-600"
                        >
                          <svg
                            class="shrink-0 size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </label>
                        <input
                          id="hs-ratings-readonly-2"
                          type="radio"
                          class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                          name="hs-ratings-readonly"
                          value="2"
                        />
                        <label
                          for="hs-ratings-readonly-2"
                          class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-neutral-600"
                        >
                          <svg
                            class="shrink-0 size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </label>
                        <input
                          id="hs-ratings-readonly-3"
                          type="radio"
                          class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                          name="hs-ratings-readonly"
                          value="3"
                        />
                        <label
                          for="hs-ratings-readonly-3"
                          class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-neutral-600"
                        >
                          <svg
                            class="shrink-0 size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </label>
                        <input
                          id="hs-ratings-readonly-4"
                          type="radio"
                          class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                          name="hs-ratings-readonly"
                          value="4"
                        />
                        <label
                          for="hs-ratings-readonly-4"
                          class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-neutral-600"
                        >
                          <svg
                            class="shrink-0 size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </label>
                        <input
                          id="hs-ratings-readonly-5"
                          type="radio"
                          class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                          name="hs-ratings-readonly"
                          value="5"
                        />
                        <label
                          for="hs-ratings-readonly-5"
                          class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-neutral-600"
                        >
                          <svg
                            class="shrink-0 size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                    <Separator className="my-3" />
                    <div>
                      <h1 className="text-semibold text-black">
                        Rate your review
                      </h1>
                      <textarea
                        cols="30"
                        rows="5"
                        className="w-full border border-gray-300 mt-2 rounded-md"
                      ></textarea>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </Card>
        <Card className="p-3  my-3 flex justify-between items-center flex-col lg:flex-row lg:gap-0 gap-5">
          <div className="flex gap-5 items-cente  flex-col lg:flex-row">
            <img src={img} alt="" className="w-40 rounded-md" />
            <div>
              <h1 className="font-semibold text-md">
                Electrical Services{" "}
                <span className="bg-red-700 text-white p-1 rounded-md ml-3 text-[10px]">
                  Cancelled
                </span>
              </h1>
              <p className="text-[16px]">
                <span className="w-40 text-gray-500">Booking Date :</span> 27
                Sep, 17:00-18:00
              </p>
              <p className="text-[16px]">
                <span className="w-32 text-gray-500">Booking ID :</span> 127654
              </p>
              <p className="text-[16px]">
                <span className="w-32 text-gray-500">Amount :</span>₹449{" "}
                <span className="bg-pink-50 text-pink-600 text-[12px] h-6 ml-4">
                  PayPal
                </span>
              </p>
              <p className="text-[16px]">
                <span className="w-32 text-gray-500">Provider :</span> John Doe
              </p>
            </div>
          </div>
          <Dialog>
            <DialogTrigger>
              <Button className="bg-white text-black border border-black hover:text-white">
                <CalendarCheck /> Reschedule
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="mb-5">Reschedule Booking</DialogTitle>
                <DialogDescription>
                  <Separator className="mb-5" />
                  <label className="mt-10 text-black">Appointment Date</label>
                  <input
                    type="date"
                    className="border border-black p-3 rounded-md w-full mb-3 mt-1"
                  />
                  <label className="text-black">Appointment Time</label>
                  <input
                    type="text"
                    className="border border-black p-3 rounded-md w-full mb-3 mt-1"
                  />
                  <Separator className="my-3" />
                  <DialogFooter>
                    <Button type="submit" className="my-5">
                      Save changes
                    </Button>
                  </DialogFooter>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </Card>
        <Card className="p-3  my-3 flex justify-between items-center flex-col lg:flex-row lg:gap-0 gap-5">
          <div className="flex gap-5 items-center  flex-col lg:flex-row">
            <img src={img} alt="" className="w-40 rounded-md" />
            <div>
              <h1 className="font-semibold text-md">
                Electrical Services{" "}
                <span className="bg-blue-700 text-white p-1 rounded-md ml-3 text-[10px]">
                  In-progress
                </span>
              </h1>
              <p className="text-[16px]">
                <span className="w-40 text-gray-500">Booking Date :</span> 27
                Sep, 17:00-18:00
              </p>
              <p className="text-[16px]">
                <span className="w-32 text-gray-500">Booking ID :</span> 127654
              </p>
              <p className="text-[16px]">
                <span className="w-32 text-gray-500">Amount :</span>₹449{" "}
                <span className="bg-pink-50 text-pink-600 text-[12px] h-6 ml-4">
                  PayPal
                </span>
              </p>
              <p className="text-[16px]">
                <span className="w-32 text-gray-500">Provider :</span> John Doe
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/tracking">
              <Button  className="bg-white text-black border border-black hover:text-white w-32">
                <LocateFixed className="size-3" />
                Live Track
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BookingList;
