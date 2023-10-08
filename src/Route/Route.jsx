import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import EventDetails from "../pages/EventDetails/EventDetails";
import Booking from "../pages/Booking/Booking";
import Contact from "../pages/Contact/Contact";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:()=>fetch('/fitness.json')
           },
            {
                path: "/booking",
                element: <Booking></Booking> ,
           },
            {
                path: "/contact",
                element:  <Contact></Contact> ,
           },
            {
                path: "/login",
                element:<Login></Login> 
           },
            {
                path: "/register",
                element: <Registration></Registration>
           },
            {
                path: "/event/:id",
                element: <EventDetails></EventDetails>,
                loader:()=>fetch('/fitness.json')
           },
        ]
        
    }
])

export default myCreatedRoute;