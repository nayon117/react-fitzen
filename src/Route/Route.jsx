import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import EventDetails from "../pages/EventDetails/EventDetails";
import Booking from "../pages/Booking/Booking";
import Contact from "../pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../pages/Blog/Blogs";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import About from "../pages/About/About";
import Faq from "../pages/FAQ/Faq";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/fitness.json"),
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
        loader: () => fetch("/blogs.json"),
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/event/:id",
        element: (
          <PrivateRoute>
            {" "}
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/fitness.json"),
      },
      {
        path: "/blog/:id",
        element: (
          <PrivateRoute>
            {" "}
            <BlogDetails></BlogDetails>{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("/blogs.json"),
      },
    ],
  },
]);

export default myCreatedRoute;
