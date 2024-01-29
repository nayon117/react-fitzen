import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../pages/Footer/Footer";
import MessengerCustomerChat from 'react-messenger-customer-chat';

const MainLayout = () => {
  return (
    <div className="font-poppins">
       <MessengerCustomerChat
    pageId="211034232098177"
    appId="711331871134355"
    
  />,
      <div className="container mx-auto px-4 md:px-8 lg:px-16 ">
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen container mx-auto px-4 md:px-8 lg:px-16">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default MainLayout;
