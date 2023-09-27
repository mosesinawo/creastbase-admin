import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from './layout/DefaultLayout'
import Home from "./pages/home/Home"
import UploadPage from "./pages/upload/UploadPage";
import UserDetails from "./pages/userDetails/UserDetails";
import ApartmentDetails from "./pages/apartment/ApartmentDetails";
import LandDetails from "./pages/land/LandDetails";
import EventHallDetails from "./pages/eventHall/EventHallDetails";
import PropertyDetails from "./pages/property/Propertyetails";



const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/dashboard" />
            },
            {
                path: '/dashboard',
                element: <Home />
            },
            {
                path: '/assets',
                element: <Home />
            },
            {
                path: '/users',
                element: <Home />
            },
            {
                path: '/finance',
                element: <Home />
            },
            {
                path: "/assets/upload",
                element: <UploadPage />
            },
            {
                path: "/assets/apartment",
                element: <ApartmentDetails />
            },
            {
                path: "/assets/land",
                element: <LandDetails />
            },
            {
                path: "/assets/event-hall",
                element: <EventHallDetails />
            },
            {
                path: "/assets/properties",
                element: <PropertyDetails />
            },
            {
                path: "/assets/userinfo",
                element: <UserDetails />
            },
        ]
    }
])

export default router;