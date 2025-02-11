import React from "react";
import logo from "./../../assets/logo.png";
import { Button } from "../ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Separator } from "../ui/separator";
import google from "./../../assets/google.png";
import facebook from "./../../assets/facebook.png";
import { Card } from "../ui/card";
import banner from "./../../assets/buckets-paint-floor.jpg";
import { ArrowLeftFromLine, CircleCheck, ShieldCheck } from "lucide-react";
import { toast, Toaster } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handlePrevNav = () => {
    navigate(-1);
  };

  const handleLogin = () => {
    toast(
      <div className="flex items-center gap-2 text-green-900">
        <CircleCheck classname="size-10 text-green-600 hidden" /> Signed in
        successfully!!!
      </div>
    );
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="" style={{ width: "98vw", height: "98vh" }}>
      <Toaster />
      <p
        className="flex gap-1 py-3 px-3 items-center cursor-pointer hover:font-bold duration-300"
        onClick={handlePrevNav}
      >
        <ArrowLeftFromLine className="h-4 w-4" /> Back
      </p>
      <div className="flex justify-center items-center flex-col h-[90vh] relative">
        <div
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            filter: "blur(10px)",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></div>
        <Card
          className="p-4 relative z-10 md:p-20 lg:p-4"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
          }}
        >
          <div className="flex justify-center items-center py-2">
            <Link to="/">
              <img src={logo} alt="" className="w-20" />
            </Link>
          </div>

          <div class="relative z-0 w-72 mb-5 group mt-5 ">
            <input
              type="number"
              name="floating_mobile"
              id="floating_mobile"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />

            <label
              for="floating_mobile"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mobile Number
            </label>
          </div>

          {/* <div class="relative z-0 w-72 mb-5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_pasword"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            <p className="flex justify-end  text-sm text-gray-500 hover:underline">
              Forgot Password ?
            </p>
          </div> */}

          <div className="flex justify-center items-center">
            <Dialog>
              <DialogTrigger>
                <Button className="h-8 gradient">SIGN IN</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                  <DialogDescription>
                    <div className="flex justify-center items-center flex-col">
                    {/* <div className="p-3 gradient rounded-full">  <ShieldCheck className="size-12 text-white" /></div> */}
                    <div className="space-y-3">
                      <h1 className="text-black text-lg font-sans text-center">Verify your account</h1>
                      <p>A One-Time Password has been sent to +91 xxxxxxxx90</p>
                    </div>
                      <div className="mt-5">
                        <InputOTP maxLength={6}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                      <div>
                        <Button className="gradient text-white px-10 mt-8 mb-3" onClick={handleLogin}>Verify</Button>
                      </div>
                      <p>Didn't receive the code ? <span className="text-gradient cursor-pointer hover:underline">Resend</span></p>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex items-center my-3 w-32">
            <Separator className="" /> <span className="text-gray-300">OR</span>
            <Separator />
          </div>

          <div className="flex gap-3">
            <div className="w-36 flex justify-center items-center border border-gray-300 p-1 rounded-md bg-transparent hover:border-gray-400">
              <img src={google} alt="" className="w-7" />
            </div>
            <div className="w-36 flex justify-center items-center border border-gray-300 p-1 rounded-md bg-transparent hover:border-gray-400">
              <img src={facebook} alt="" className="w-8" />
            </div>
          </div>

          <p className="text-gray-500 text-sm text-center my-4">
            Don’t have a account?
            <Link to="/register">
              <span className="text-gradient ml-2 font-semibold">
                Join us Today
              </span>
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Login;
