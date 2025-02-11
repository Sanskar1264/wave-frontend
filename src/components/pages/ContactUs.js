import React from "react";
import { Card } from "../ui/card";
import img from "./../../assets/service-76.jpg";
import { Button } from "../ui/button";

const ContactUs = () => {
  return (
    <div className="mt-28 px-[3vw]">
      <div className="flex flex-col lg:flex-row gap-8 my-10">
        <Card className="w-1/2 p-3">
          <h1 className="text-2xl text-center my-3   font-bold">Contact Us</h1>
          <div>
            <label className="text-[14px] font-semibold">Full Name</label>
            <input
              type="text"
              className="py-2 w-full border border-gray-300 p-3 rounded-md mt-1 "
              placeholder="Enter your Name"
            />
          </div>
          <div className="my-3">
            <label className="text-[14px] font-semibold">Email Address</label>
            <input
              type="email"
              className="py-2 w-full border border-gray-300 p-3 rounded-md mt-1 "
              placeholder="Enter your Name"
            />
          </div>
          <div className="my-3">
            <label className="text-[14px] font-semibold">Phone Number</label>
            <input
              type="number"
              className="py-2 w-full border border-gray-300 p-3 rounded-md mt-1 "
              placeholder="Enter your Phone Number"
            />
          </div>
          <div className="my-3">
            <label className="text-[14px] font-semibold">Enter Message</label>
            <textarea
              cols="30"
              rows="5"
              className="w-full border border-gray-300 rounded-md mt-1"
            ></textarea>
          </div>
          <div>
            <Button className="px-10 gradient">Submit</Button>
          </div>
        </Card>

        <Card className="w-1/2 p-3">
          <Card className="my-3 p-3">
            <h1 className="font-bold">Need help?</h1>
            <p className="text-gray-600">
              For any immediate help regarding your bookings, please log-in and
              visit our Help Center. You will be able to get instant resolution
              through our chat support.
            </p>
          </Card>
          <Card className="my-3 p-3">
            <h1 className="font-bold">Still facing issues?</h1>
            <p className="text-gray-600">
              If you've already tried chatting with us and are not satisfied
              with the resolution - please send us an email on info@wave.com. We
              will get back to you within 24-48 hours..
            </p>
          </Card>
          <Card className="my-3 p-3">
            <h1 className="font-bold">What is our helpline number?</h1>
            <p className="text-gray-600">
              We have switched from a customer care phone number to a fast,
              simple-to-use chat based support. Just open our Help Center,
              select your issue, and initiate a chat with us.
            </p>
          </Card>
          <Card className="my-3 p-3">
            <h1 className="font-bold">Our office addresses?</h1>
            <p className="text-gray-600">
            You can view a list of all our office addresses by clicking below.
            </p>
            <p className="text-gradient my-2">View All Address</p>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
