import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "../components/common/Loader";


const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));



function AppRouter(){

return(

<Suspense fallback={<Loader/>}>

<Routes>


<Route
path="/"
element={<Home/>}
/>


<Route
path="/about"
element={<About/>}
/>


<Route
path="/services"
element={<Services/>}
/>


<Route
path="/gallery"
element={<Gallery/>}
/>


<Route
path="/contact"
element={<Contact/>}
/>


<Route
path="*"
element={<NotFound/>}
/>


</Routes>

</Suspense>

)

}


export default AppRouter;