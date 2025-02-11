import React from "react";
import { Card } from "./ui/card";
import { ShoppingBagIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import img from "./../assets/provider-19.jpg"
import { Link } from "react-router-dom";


const Cart = () => {
  return (
    <div className="mt-28 px-[3vw] mb-28">
      <div className="flex justify-between gap-10">
        <div className="w-[80%] my-5">
          <Card className='p-3'>
            <h1 className="text-2xl text-center font-bold underline">Booking item(1 item)</h1>
            <div className="py-10 flex items-center gap-10">
              {/* <div className=" flex items-center gap-10 "> */}
                  <span className="flex items-center gap-3">  1.<img src={img} alt="" className="aspect-square w-24 object-center rounded-md"/></span>
                    <div>
                        <h1 className="font-semibold">Home cleaning & maintenance</h1>
                        <p>Price: ₹399</p>
                        <p>Service Provider: John Doe</p>
                        <span className="text-red-600 underline text-sm">Delete</span>
                    </div>
              {/* </div> */}
              {/* <div>
                Delete
              </div> */}
            </div>
          </Card>
        </div>
        <div className="w-[30%]">
          <Card className="border border-black p-3 sticky top-[200px]">
            <span className="flex justify-center items-center gap-2 my-3 font-bold">
              <ShoppingBagIcon className="size-4" /> Booking Summary
            </span>
            <Separator className="my-2  bg-gray-300" />
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">SubTotal</h3>
                <h2 className="text-xl font-bold ">₹399</h2>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Tax and Fee</h3>
                <h2 className=" text-xl font-bold">₹50</h2>
              </div>
            </div>
            <Separator className="my-3  bg-gray-300" />
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-xl">Total</h1>
              <h2 className=" text-xl font-bold">₹449</h2>
            </div>
            <Separator className="my-5  bg-gray-600" />
            <h4>Apply a Promotion Code</h4>
            <div className="flex justify-center items-center my-3">
              <input
                type="text"
                placeholder="Enter a promotion Code"
                className="border border-gray-500 py-1 w-full rounded-l p-2"
              />
              <button className="py-1 bg-black text-white p-2 rounded-r">
                Apply
              </button>
            </div>
           <Link to='/checkout'> <Button className="w-full my-2 gradient text-white">Checkout</Button></Link>
            <p className="text-sm text-gray-500">
              By continuing to checkout you are agreeing to our 
              <span className="underline cursor-pointer mx-1">
                  terms & condtions
              </span>
              and
              <span className="underline cursor-pointer mx-1"> privacy policy</span>
            </p>
            <Separator className="my-5  bg-gray-300" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
