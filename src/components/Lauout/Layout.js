import React from "react";
import FormValidate from "../FormValidate/FormValidate";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Layout = () => {
    return(
         <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<FormValidate/>} />
            </Routes>
         </BrowserRouter>
    )
}

export default Layout