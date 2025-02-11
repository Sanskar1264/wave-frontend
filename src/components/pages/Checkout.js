import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import img from "./../../assets/provider-19.jpg";
import { Card } from "../ui/card";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import {
  CalendarCheck,
  CalendarDays,
  CalendarIcon,
  Clock,
  FileText,
  LocateFixed,
  MoveLeft,
  MoveRight,
} from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import success from "./../../assets/success.png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Checkbox } from "../ui/checkbox";

const steps = [
  "1 - Appointment",
  "2 - Address",
  "3 - Payment",
  "4 - Confirmation",
];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      navigate(-1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [selectedTime, setSelectedTime] = useState("");
  const [date, setDate] = useState(null);

  const [selectAddress, setSelectAddress] = useState([]);

  const dummy_address = [
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      phone: "1234567890",
      address: "xyz streeet city-abc",
      id: "1",
    },
    {
      name: "Mr Doe",
      email: "johndoe@gmail.com",
      phone: "9876543210",
      address: "pqr streeet city-abc",
      id: "2",
    },
    {
      name: "Mr Doe",
      email: "johndoe@gmail.com",
      phone: "9876543210",
      address: "pqr streeet city-abc",
      id: "3",
    },
    {
      name: "Mr Doe",
      email: "johndoe@gmail.com",
      phone: "9876543210",
      address: "pqr streeet city-abc",
      id: "4",
    },
    {
      name: "Mr Doe",
      email: "johndoe@gmail.com",
      phone: "9876543210",
      address: "pqr streeet city-abc",
      id: "5",
    },
    {
      name: "Mr Doe",
      email: "johndoe@gmail.com",
      phone: "9876543210",
      address: "pqr streeet city-abc",
      id: "6",
    },
  ];

  const [address, setAddress] = useState({
    name: selectAddress.name,
    email: selectAddress.email,
    phone: selectAddress.phone,
    address: selectAddress.address,
  });

  const navigate = useNavigate();

  return (
    <div>
      <Stepper
        activeStep={activeStep}
        styleConfig={{
          activeBgColor: "green",
          completedBgColor: "green",
          inactiveBgColor: "gray",
          activeTextColor: "white",
          completedTextColor: "white",
          inactiveTextColor: "black",
        }}
      >
        {steps.map((label, index) => (
          <Step key={index} label={label} />
        ))}
      </Stepper>
      <div>
        {activeStep === 0 && (
          <ServiceInformation
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            date={date}
            setDate={setDate}
          />
        )}
        {activeStep === 1 && (
          <Address
            address={dummy_address}
            setSelectAddress={setSelectAddress}
            selectAddress={selectAddress}
            add={address}
          />
        )}
        {activeStep === 2 && (
          <Payment
            selectAddress={selectAddress}
            selectedTime={selectedTime}
            date={date}
          />
        )}
        {activeStep === 3 && (
          <Confirmation date={date} selectedTime={selectedTime} />
        )}
        <div
          className="mb-10"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Link to="/">
            <button
              className={`border border-black p-2 rounded-md px-5 hover:bg-black hover:text-white flex gap-1 font-semibold group mx-5 ${
                activeStep === 3 ? "block" : "hidden"
              }`}
            >
              {activeStep === 3 ? "Home" : ""}
            </button>
          </Link>
          <button
            // disabled={activeStep === 3}
            onClick={handleBack}
            style={{ marginRight: "10px" }}
            className={`border border-black p-2 rounded-md px-5 hover:bg-black hover:text-white flex gap-1 font-semibold group ${
              activeStep === 3 ? "hidden" : "block"
            }`}
          >
            <MoveLeft className="group-hover:scale-110" /> Back
          </button>
          <Link to={`${activeStep === 3 ? "/booking_list" : ""}`}>
            <button
              onClick={handleNext}
              className="border border-black p-2 rounded-md px-5 hover:opacity-80 flex gap-1 font-semibold gradient text-white group"
            >
              {activeStep === 0
                ? "Book Appointment"
                : activeStep === 2
                ? "Proceed to Pay"
                : activeStep === 3
                ? "Booked History"
                : "Next"}
              <MoveRight className="group-hover:scale-110" />
            </button>
          </Link>
        </div>
      </div>
      {/* {activeStep === steps.length && (
        <div>
          <p>All steps completed - you're finished</p>
          <button onClick={handleReset}>Reset</button>
        </div>
      )} */}
    </div>
  );
};

const ServiceInformation = ({
  selectedTime,
  setSelectedTime,
  date,
  setDate,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(true);
  const handleSelectDate = (selectedDate) => {
    setDate(selectedDate);
    setIsPopoverOpen(false);
  };
  const times = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
  ];
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };
  return (
    <form className="px-[10vw] flex justify-between  gap-10 flex-col lg:flex-row">
      <div className="w-[30%]">
        <h1>Appointment Date</h1>
        <div className="my-5">
          <Popover
            open={isPopoverOpen}
            onOpenChange={setIsPopoverOpen}
            onClick={handleSelectDate}
          >
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="lg:w-[70%] w-full">
        <h1>Appointment Time</h1>
        <Card className="my-3">
          <div>
            <label htmlFor="time-picker" className="px-6 my-4">
              Select a time:
            </label>
            <div className="flex gap-3 flex-wrap mx-auto px-6 my-1">
              {times.map((time, index) => (
                <div
                  key={index}
                  onClick={() => handleTimeSelect(time)}
                  className={`flex justify-center items-center border border-black p-1 mx-auto lg:mx-0 w-24 my-1 rounded-md cursor-pointer hover:bg-black hover:text-white ${
                    selectedTime === time ? "bg-black text-white" : "bg-white"
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
            {selectedTime && (
              <p className="px-6 my-4 ">
                Selected Time:{" "}
                <span className="font-semibold"> {selectedTime}</span>{" "}
              </p>
            )}
            {date && (
              <p className="px-6 my-4 ">
                Selected Date:{" "}
                <span className="font-semibold">
                  {date ? format(date, "PPP") : ""}
                </span>
              </p>
            )}
          </div>
        </Card>
      </div>
    </form>
  );
};

const Address = ({ address, setSelectAddress, selectAddress }) => {
  const handleSelectAddress = (add) => {
    console.log(selectAddress);
    setSelectAddress(add);
  };
  return (
    <div className="px-[10vw] flex justify-between  gap-10 flex-col lg:flex-row">
      <Card className="lg:w-[30%] p-3 h-[450px] overflow-y-auto w-full">
        <h1 className="my-5 text-center text-2xl">Select Address</h1>
        {address.map((add, index) => (
          <Card
            key={index}
            onClick={() => {
              handleSelectAddress(add);
            }}
            className={`p-3 my-3 hover:bg-black hover:text-white ${
              selectAddress.id === add.id ? "bg-black text-white" : ""
            }`}
          >
            <h1 className="font-semibold">{add.name}</h1>
            <p>{add.phone}</p>
            <p>{add.email}</p>
            <p>{add.address}</p>
          </Card>
        ))}
      </Card>

      <Card className="lg:w-[70%] p-3 w-full">
        <h1 className="my-5 text-center text-2xl">Personal Information</h1>
        <form className="space-y-4">
          <div className="flex items-center">
            <div className="w-24 font-semibold">
              {" "}
              <label>Name: </label>
            </div>
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              value={selectAddress.name}
              className="border border-gray-300 py-1 p-3 rounded-md w-96"
            />
          </div>
          <div className="flex items-center">
            <div className="w-24 font-semibold">
              <label className="w-40">Email: </label>
            </div>
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={selectAddress.email}
              className="border border-gray-300 py-1 p-3 rounded-md w-96"
            />
          </div>
          <div className="flex items-center">
            <div className="w-24 font-semibold">
              <label className="w-40">Mobile No: </label>
            </div>
            <input
              type="number"
              placeholder="Enter your Mobile Number"
              min={10}
              max={10}
              name="phone"
              value={selectAddress.phone}
              className="border border-gray-300 py-1 p-3 rounded-md w-96"
            />
          </div>
          <div className="flex items-center">
            <div className="w-24 font-semibold">
              <label className="w-40">Address: </label>
            </div>
            <textarea
              cols="10"
              rows="5"
              name="address"
              value={selectAddress.address}
              className="w-96 border border-300 rounded-md p-3"
            ></textarea>
          </div>

          {/* <div className="flex items-center space-x-2">
            <Checkbox id="terms2" disabled />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div> */}
          {/* <Checkbox/> */}
        </form>
      </Card>
    </div>
  );
};

const Payment = ({ selectAddress, date, selectedTime }) => {
  return (
    <div className="px-[10vw] flex justify-center items-center  gap-10">
      <Card className="lg:w-[50%] p-3 space-y-4 w-full ">
        <h1 className="my-5 text-center text-2xl underline">Booking Summary</h1>
        <div className="mb-3 flex items-center gap-10">
          <span className="flex items-center gap-3">
            <img
              src={img}
              alt=""
              className="aspect-square w-24 object-center rounded-md"
            />
          </span>
          <div>
            <h1 className="font-semibold">Home cleaning & maintenance</h1>
            <p>Price: ₹399</p>
            <p>Service Provider: John Doe</p>
            <p>
              Amount to be paid:{" "}
              <span className="font-semibold text-xl"> ₹449</span>
            </p>
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="font-normal text-lg my-2 underline">Booked Slot</h3>
          <p className="flex items-center gap-2">
            <CalendarCheck className="size-4" />{" "}
            <span className="font-semibold">
              {date ? format(date, "PPP") : ""}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Clock className="size-4" />{" "}
            <span className="font-semibold">{selectedTime}</span>
          </p>
        </div>
        <div className="space-y-1">
          <h3 className="font-normal text-lg my-2 underline">
            Booking Information
          </h3>
          <p>
            Name : <span className="font-semibold">{selectAddress.name}</span>
          </p>
          <p>
            Contact Number :{" "}
            <span className="font-semibold">{selectAddress.phone}</span>
          </p>
          <p>
            Email : <span className="font-semibold">{selectAddress.email}</span>
          </p>
          <p>
            Address :{" "}
            <span className="font-semibold">{selectAddress.address}</span>
          </p>
        </div>
      </Card>
      {/* <Card className="w-[60%] p-3 ">
        <h1 className="my-5 text-center text-2xl underline">Payment </h1>
      </Card> */}
    </div>
  );
};

const Confirmation = ({ selectedTime }) => {
  const date = new Date();
  const day = date.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear(); // Function to get the ordinal suffix for the day
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // covers 11th to 19th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const formattedDate = `${day}${getOrdinalSuffix(day)} ${month} ${year}`;

  return (
    <div className="px-[10vw]">
      <div className=" flex justify-center items-center  flex-col space-y-2 ">
        {/* <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div> */}
        <img src={success} alt="" className="w-20" />
        <h1>Your Booking booked successfully.</h1>
        <p className="text-sm  text-gray-500">
          We have sent booking information to your email address.
        </p>
      </div>
      <div className="bg-gray-100 p-3 my-10 ">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div>
            <h1 className="text-2xl font-semibold">Booking ID: 2378910</h1>
            <span className="flex gap-1 items-center mt-2">
              <CalendarDays className="size-4" /> {formattedDate}
            </span>
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-lg my-2 underline">Booked Slot</h3>
            <p className="flex items-center gap-2">
              <CalendarCheck className="size-4" />{" "}
              <span className="font-semibold">
                {date ? format(date, "PPP") : ""}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="size-4" />{" "}
              <span className="font-semibold">{selectedTime}</span>
            </p>
          </div>
          <div className="flex gap-2">
           {/* <Link to='/tracking'>
              <Button className="bg-gray-500 font-bold">
                <LocateFixed className="size-3" />
                Live Track
              </Button>
           </Link> */}
            <Button className="bg-gray-500 font-bold">
              <FileText className="size-3" />
              Invoice
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
