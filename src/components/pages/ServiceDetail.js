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
import {
  CalendarCheck,
  ChevronsDown,
  CircleCheck,
  CirclePlay,
  ClipboardCheck,
  Mail,
  MapPin,
  MessageCircleReply,
  Phone,
  ShoppingCart,
  ThumbsDown,
  ThumbsUp,
  User,
  UserRound,
} from "lucide-react";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import img1 from "./../../assets/provider-19.jpg";
import img2 from "./../../assets/service-47.png";
import img3 from "./../../assets/service-48.png";
import provider from "./../../assets/avatar-06.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Progress } from "../ui/progress";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Separator } from "../ui/separator";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";

const ServiceDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img1, img2];
  const navigate = useNavigate();
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };
  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };
  const handleCart = () => {
    toast(
      <div className="flex items-center gap-2 text-green-900">
        <CircleCheck classname="size-10 text-green-600 hidden" /> Added to the
        Cart!!!
      </div>
    );
    // setTimeout(() => {
    // navigate("/cart");
    // }, 1000);
  };
  return (
    <div className="px-[3vw]">
      {/* breadcrumb */}
      <Toaster />
      <div className="mt-28 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/search">Service</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Home cleaning & maintenance</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex gap-10 my-10 flex-col lg:flex-row">
        <div className="lg:w-[75%] w-full">
          <Card className="p-3 w-[33%]">
            <div className="flex justify-between items-center ">
              <h1 className="lg:text-3xl font-bold text-xl">
                Home cleaning & maintenance
              </h1>
              <div className="flex gap-2 items-center gradient text-white rounded-xl py-1 px-2">
                <CalendarCheck className="h-3 w-3" />
                <p className="flex text-[10px]">100+ Bookings</p>
              </div>
            </div>
            <div className="flex items-center gap-2 my-3 text-gray-500">
              <Button className="bg-green-800 h-6 px-2">
                <StarFilledIcon />
                4.8
              </Button>
              150 Reviews
            </div>
            {/* <div className="my-5">
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <img src={img1} alt="" className="w-full h-[450px]" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src={img2} alt="" className="w-full  h-[450px]" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src={img3} alt="" className="w-full  h-[450px]" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src={img1} alt="" className="w-full  h-[450px]" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src={img2} alt="" className="w-full  h-[450px]" />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-1" />
                <CarouselNext className="absolute right-1" />
              </Carousel>
            </div>

            <div className="flex gap-2">
              <img src={img1} alt="" className="w-[19%] rounded-md" />
              <img src={img2} alt="" className="w-[19%] rounded-md" />
              <img src={img3} alt="" className="w-[19%] rounded-md" />
              <img src={img1} alt="" className="w-[19%] rounded-md" />
              <img src={img2} alt="" className="w-[19%] rounded-md" />
            </div> */}
            <div className="my-5 relative">
              <Carousel>
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className={index === currentIndex ? "block" : "hidden"}
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-full h-[350px] rounded-md object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className="absolute left-1"
                  onClick={handlePreviousClick}
                />
                <CarouselNext
                  className="absolute right-1"
                  onClick={handleNextClick}
                />
              </Carousel>
            </div>
            <div className="flex gap-2">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className={`w-[19%] rounded-md ${
                    index === currentIndex ? "border border-blue-500" : ""
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>

            <div>
              <h1 className="text-2xl mt-5 font-bold mb-2">Service Overview</h1>
              <p className="text-md text-gray-500">
                Home cleaning and maintenance encompass a wide array of tasks
                aimed at ensuring that a living space remains hygienic,
                organized, and functioning efficiently. These services focus on
                a meticulous cleaning of all areas within a home, including
                dusting, vacuuming, mopping floors, cleaning bathrooms and
                kitchens, and tidying up living spaces. Maintenance tasks often
                cover the upkeep of household systems and appliances, minor
                repairs, and general home improvement projects to prevent
                potential issues.
              </p>
            </div>

            <div className="my-3">
              <h1 className="text-2xl ">Includes</h1>
              <p></p>
              <div className="bg-gray-50 py-3 p-3 flex flex-wrap gap-4 rounded-md mt-2">
                <p className="flex gap-2 items-center text-gray-500">
                  <CircleCheck className="text-green-700" />
                  Deep cleaning of surfaces
                </p>
                <p className="flex gap-2 items-center text-gray-500">
                  <CircleCheck className="text-green-700" />
                  Sanitizing bathrooms and kitchens
                </p>
                <p className="flex gap-2 items-center text-gray-500">
                  <CircleCheck className="text-green-700" />
                  Wiping down countertops and appliances
                </p>
                <p className="flex gap-2 items-center text-gray-500">
                  <CircleCheck className="text-green-700" />
                  Vacuuming and mopping floors
                </p>
              </div>

              <div className="my-3 rounded-md">
                <h1 className="text-2xl ">Excludes</h1>
                <p></p>
                <div className="bg-gray-50 py-3 p-3 flex flex-wrap gap-4 rounded-md mt-2">
                  <p className="flex gap-2 items-center text-gray-500">
                    <CircleCheck className="text-green-700" />
                    Cleaning of external areas like gardens and patios
                  </p>
                  <p className="flex gap-2 items-center text-gray-500">
                    <CircleCheck className="text-green-700" />
                    Major repairs or renovations
                  </p>
                  <p className="flex gap-2 items-center text-gray-500">
                    <CircleCheck className="text-green-700" />
                    Wiping down countertops and appliances
                  </p>
                  <p className="flex gap-2 items-center text-gray-500">
                    <CircleCheck className="text-green-700" />
                    Specialized tasks such as chimney sweeping or extensive mold
                    remediation
                  </p>
                </div>
              </div>

              <div>
                <h1 className="text-2xl ">Video</h1>
                <div className="relative">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-[350px] rounded-md mt-2"
                  />
                  <div className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <CirclePlay className="w-10 h-10 opacity-50" />
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-2xl my-5">FAQ's</h1>
                <div>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        1. What does the home cleaning service include?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-500">
                        Our home cleaning service includes deep cleaning of
                        surfaces, sanitizing bathrooms and kitchens, wiping down
                        countertops and appliances, washing windows, thorough
                        dusting of all rooms, vacuuming and mopping floors, and
                        tidying up living spaces. Additionally, we check and
                        replace air filters, inspect plumbing and electrical
                        systems, perform minor repairs like fixing small leaks,
                        and ensure heating and cooling systems are functioning
                        properly.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        2. What is excluded from the home cleaning service?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-500">
                        Our standard home cleaning service does not include
                        cleaning of external areas such as gardens and patios,
                        major repairs or renovations, pest control services,
                        cleaning hazardous materials, and specialized tasks like
                        chimney sweeping or extensive mold remediation.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        3. How often should I schedule home cleaning and
                        maintenance services?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-500">
                        The frequency of home cleaning and maintenance services
                        depends on your personal needs and the condition of your
                        home. For general upkeep, we recommend scheduling a
                        cleaning service every 1-2 weeks. Maintenance tasks may
                        be scheduled monthly, quarterly, or annually based on
                        the specific requirements of your home.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        4. What if I am not satisfied with the service provided?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-500">
                        Your satisfaction is our top priority. If you are not
                        satisfied with the service provided, please contact us
                        within 24 hours and we will address your concerns and
                        arrange for a re-clean if necessary.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        5. How do I schedule a service appointment?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-500">
                        You can schedule a service appointment by contacting us
                        via phone, email, or through our website. We offer
                        flexible scheduling options to accommodate your busy
                        lifestyle.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </Card>

          <Card className="my-5 rounded-md p-3">
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-2xl mt-5 font-bold mb-2">Reviews (50)</h1>
                <Dialog>
                  <DialogTrigger>
                    <Button className="h-8 px-2">Write a Review</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Write a Review</DialogTitle>
                      <DialogDescription>
                        <textarea
                          cols="30"
                          rows="5"
                          placeholder="write a review"
                          className="border border-gray-500 w-full my-5 p-2"
                        ></textarea>
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center items-center">
                      <Button
                        type="submit"
                        className="px-10 uppercase font-bold"
                      >
                        Send
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="flex gap-4 justify-center items-center w-full">
              <div className="bg-[#F4F5F5] p-3 space-y-2 rounded-md w-[40%]">
                <h1 className="text-2xl text-center">
                  Customer Reviews & Ratings
                </h1>
                <div className="flex gap-1 justify-center items-center">
                  <StarFilledIcon className="text-green-700" />
                  <StarFilledIcon className="text-green-700" />
                  <StarFilledIcon className="text-green-700" />
                  <StarFilledIcon className="text-green-700" />
                  <StarFilledIcon className="text-green-700" />
                </div>
                <div className="flex justify-center items-center text-gray-500">
                  <p>(4.9 out of 5.0)</p>
                </div>
                <div className="flex justify-center items-center">
                  <p>Based On 2,459 Reviews</p>
                  {/* <Progress value={33} /> */}
                </div>
              </div>
              <div className="w-[60%]">
                <span className="flex items-center gap-2 truncate">
                  5 Star Ratings <Progress value={80} /> 1,245
                </span>
                <span className="flex items-center gap-2 truncate">
                  4 Star Ratings <Progress value={60} /> 600
                </span>
                <span className="flex items-center gap-2 truncate">
                  3 Star Ratings <Progress value={70} />
                  450
                </span>
                <span className="flex items-center gap-2 truncate">
                  2 Star Ratings <Progress value={30} />
                  300
                </span>
                <span className="flex items-center gap-2 truncate">
                  1 Star Ratings <Progress value={15} />
                  150
                </span>
              </div>
            </div>

            <Card className="p-3 my-7">
              <div>
                <div className="flex justify-between items-center">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src={provider}
                      alt=""
                      className="rounded-full size-12"
                    />
                    <div>
                      <h1>John Doe</h1>
                      <p>2 days ago </p>
                    </div>
                  </div>
                  <div className="bg-green-700 py-1 p-3 rounded-md text-white">
                    <span className="flex items-center gap-1">
                      <StarFilledIcon className="text-white" /> 5
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 my-2">
                  The quality of work was exceptional, and they left the site
                  clean and tidy. I was impressed by their attention to detail
                  and commitment to safety standards. Highly recommend their
                  services!
                </p>
                <div className="flex items-center gap-10 my-3">
                  <span className="flex items-center gap-2 text-gray-500">
                    <ThumbsUp className="size-4 text-black" /> Like
                  </span>
                  <span className="flex items-center gap-2 text-gray-500">
                    <ThumbsDown className="size-4 text-black" /> Dislike
                  </span>
                  <span className="flex items-center gap-2 text-gray-500">
                    <MessageCircleReply className="size-4 text-black" /> Reply
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-3 my-7">
              <div>
                <div className="flex justify-between items-center">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src={provider}
                      alt=""
                      className="rounded-full size-12"
                    />
                    <div>
                      <h1>John Doe</h1>
                      <p>2 days ago </p>
                    </div>
                  </div>
                  <div className="bg-green-700 py-1 p-3 rounded-md text-white">
                    <span className="flex items-center gap-1">
                      <StarFilledIcon className="text-white" /> 5
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 my-2">
                  The quality of work was exceptional, and they left the site
                  clean and tidy. I was impressed by their attention to detail
                  and commitment to safety standards. Highly recommend their
                  services!
                </p>
                <div className="flex items-center gap-10 my-3">
                  <span className="flex items-center gap-2 text-gray-500">
                    <ThumbsUp className="size-4 text-black" /> Like
                  </span>
                  <span className="flex items-center gap-2 text-gray-500">
                    <ThumbsDown className="size-4 text-black" /> Dislike
                  </span>
                  <span className="flex items-center gap-2 text-gray-500">
                    <MessageCircleReply className="size-4 text-black" /> Reply
                  </span>
                </div>
              </div>
            </Card>

            <div className="flex justify-center items-center">
              <Button
                className="flex items-center gap-2 bg-gray-200
              text-black font-bold py-1 hover:bg-gray-100"
              >
                <ChevronsDown /> Load More
              </Button>
            </div>
          </Card>
        </div>

        <div className="lg:w-[25%] w-full">
          <Card className="p-3 sticky top-0">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Starts from </p>
                <h1 className="text-4xl font-bold flex gap-2 items-center archivo my-3">
                  ₹399
                  <span className="text-2xl text-gray-400 line-through">
                    ₹799
                  </span>
                </h1>
              </div>
              <Button className="bg-green-700 h-6 font-bold">50% OFF</Button>
            </div>
            <Separator className="my-3" />

            <Link to='/checkout'>
              <Button
                className="gradient w-full text-white font-bold"
                // onClick={handleCart}
              >
                <ShoppingCart />
                Book Now
              </Button>
            </Link>
          </Card>
          <Card className="my-3 p-3">
            <h2 className="text-xl font-bold">Service Provider</h2>
            <div className="flex justify-center items-center my-3 bg-gray-200 rounded-md py-2 flex-col">
              <img src={provider} alt="" className="rounded-full w-16" />
              <h3 className="font-bold text-md">John Doe</h3>
              <p className="flex items-center gap-1">
                <StarFilledIcon className="text-green-700" />
                (250 Reviews)
              </p>
            </div>
            <div className="p-1 space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <UserRound className="size-4" />
                  <span>Member Since</span>
                </div>
                <p className="text-sm text-gray-500">1st Jan 2024</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <MapPin className="size-4" />
                  <span>Location</span>
                </div>
                <p className="text-sm text-gray-500 truncate">Bengaluru</p>
              </div>
              {/* <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <Mail className="size-4" />
                  <span>Email</span>
                </div>
                <p className="text-sm text-gray-500">Johndoe@@gmail.com</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <Phone className="size-4" />
                  <span>Phone</span>
                </div>
                <p className="text-sm text-gray-500">+91-1234567890</p>
              </div> */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <ClipboardCheck className="size-4" />
                  <span>No of listings</span>
                </div>
                <p className="text-sm text-gray-500">5</p>
              </div>
              <Separator className="my-3" />
              <Button className="w-full font-bold">
                <Phone /> Call Customer Care
              </Button>
            </div>
          </Card>
          <Card className="p-3">
            <h2 className="text-xl font-bold">Business Hours</h2>
            <div className="space-y-2 ">
              <div className="flex justify-between items-center mt-2">
                <p>Monday</p>
                <p className="text-gray-500 text-sm">9:30 AM - 7:00 PM</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Tuesday</p>
                <p className="text-gray-500 text-sm">9:30 AM - 7:00 PM</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Wednesday</p>
                <p className="text-gray-500 text-sm">9:30 AM - 7:00 PM</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Thursday</p>
                <p className="text-gray-500 text-sm">9:30 AM - 7:00 PM</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Friday</p>
                <p className="text-gray-500 text-sm">9:30 AM - 7:00 PM</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Monday</p>
                <p className="text-gray-500 text-sm">9:30 AM - 7:00 PM</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Saturday</p>
                <p className="text-gray-500 text-sm">9:30 AM - 7:00 PM</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Sunday</p>
                <p className="text-gray-500 text-sm">9:30 AM - 7:00 PM</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
