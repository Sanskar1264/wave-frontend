import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Footer from "./components/Footer";
import ServiceDetail from "./components/pages/ServiceDetail";
import Search from "./components/pages/Search";
import Cart from "./components/Cart";
import Checkout from "./components/pages/Checkout";
import BookingList from "./components/pages/BookingList";
import JoinUs from "./components/pages/JoinUs";
import Notification from "./components/pages/Notification";
import Tracking from "./components/pages/Tracking";
import whatsapp from "./assets/icons8-whatsapp-480.png"
import arrow from "./assets/icons8-arrow-100.png"
import { useEffect, useState } from "react";
import { ChevronsUp, MoveUp } from "lucide-react";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";





const ChatIcon = ({onClick}) =>(
   <div className="fixed z-50 p-0 rounded-full cursor-pointer right-1 bottom-20 hover:scale-105">
     <div>
      <div>
        <img src={whatsapp} alt="" className="w-10"/>
      </div>
     </div>
   </div>
);

const ScrollToTopIcon = ({onClick}) =>(
  <div className="fixed z-50 p-0 rounded-full cursor-pointer right-2 bottom-10 hover:scale-105" onClick={onClick}>
  <div>
   <div className="gradient p-1 rounded-full">
     {/* <MoveUp className=" text-gradient text-white"/> */}
     <ChevronsUp className=" text-gradient text-white"/>
   </div>
  </div>
</div>
)
function App() {
  const [showIcons, setShowIcons] = useState(false)
  useEffect(()=>{
     const handleScroll = () =>{
       if(window.scrollY > 300 ) {
          setShowIcons(true)
       } else {
         setShowIcons(false)
       }
     };

     window.addEventListener('scroll' , handleScroll);

     return () => {
         window.removeEventListener('scroll' , handleScroll)
     }
  }, []);

 const scrollToTop  = () => {
   window.scrollTo({
      top:0,
      behavior:"smooth"
   })
 }

 const chatBot  = () =>{
   setShowChatApp(!showChatApp)
 }

 const [showChatApp, setShowChatApp] = useState(false)

  return (
    <BrowserRouter>
    {
       showIcons && (
          <>
           <ChatIcon onClick={chatBot}/>
           <ScrollToTopIcon onClick={scrollToTop} />
          </>
       )
    }
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        />
         <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        />
         <Route
          path="/service_details"
          element={
            <>
              <Navbar/>
              <ServiceDetail />
              <Footer/>
            </>
          }
        />
          <Route
          path="/search"
          element={
            <>
              <Navbar/>
              <Search />
              <Footer/>
            </>
          }
        />
         <Route
          path="/cart"
          element={
            <>
              <Navbar/>
              <Cart />
              <Footer/>
            </>
          }
        />
         <Route
          path="/checkout"
          element={
            <>
              <Checkout/>
            </>
          }
        />
         <Route
          path="/booking_list"
          element={
            <>
              <Navbar/>
              <BookingList />
              <Footer/>
            </>
          }
        />
        <Route
          path="/join_us"
          element={
            <>
              <Navbar/>
              <JoinUs />
              <Footer/>
            </>
          }
        />
           <Route
          path="/notification"
          element={
            <>
              <Navbar/>
              <Notification />
              <Footer/>
            </>
          }
        />
         <Route
          path="/tracking"
          element={
            <>
              <Navbar/>
              <Tracking />
              <Footer/>
            </>
          }
        />
          <Route
          path="/about_us"
          element={
            <>
              <Navbar/>
              <AboutUs />
              <Footer/>
            </>
          }
        />
         <Route
          path="/contact_us"
          element={
            <>
              <Navbar/>
              <ContactUs />
              <Footer/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
