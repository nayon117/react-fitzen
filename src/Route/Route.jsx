import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>
           },
            {
                path: "/login",
                element:<Login></Login> 
           },
            {
                path: "/register",
                element: <Registration></Registration>
           },
        ]
        
    }
])

export default myCreatedRoute;