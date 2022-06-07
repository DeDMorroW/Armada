import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./contactPage/Contact";
import Home from "./homePage/Home";
import Service from "./servicePage/Service";


export default function Pages(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/service' element={<Service/>} />
        </Routes>
    
    )
}