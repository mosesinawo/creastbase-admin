import { Navigate, createBrowserRouter } from "react-router-dom";
// const { default: DefaultLayout } = require("./layout/DefaultLayout");
// const { default: Home } = require("./pages/home/Home");
// const { default: UserDetails } = require("./pages/userDetails/UserDetails");
// const { default: ApartmentDetails } = require("./pages/apartment/ApartmentDetails");
// const { default: UploadPage } = require("./pages/upload/UploadPage");
import DefaultLayout from './layout/DefaultLayout'
import Home from "./pages/home/Home"
import UploadPage from "./pages/upload/UploadPage";
import UserDetails from "./pages/userDetails/UserDetails";
import ApartmentDetails from "./pages/apartment/ApartmentDetails";



const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path: '/',
                element: <Navigate to="/dashboard" />
            },
            {
                path:'/dashboard',
                element:<Home/>
            },
            {
                path:'/assets',
                element:<Home/>
            },
            {
                path:'/users',
                element:<Home/>
            },
            {
                path:'/finance',
                element:<Home/>
            },
            {
                path:"/assets/upload",
                element:<UploadPage/>
            },
            {
                path:"/assets/apartment",
                element:<ApartmentDetails/>
            },
            {
                path:"/assets/userinfo",
                element:<UserDetails/>
            },
        ]
    }
])

export default router;