import React from "react";
import FormValidate from "../FormValidate/FormValidate";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PassValidate from "../PassValisate/PassValidate";
import CryptoSearch from "../CryptoSearch/CryptoSearch";


const Layout = () => {
    return(
         <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<FormValidate/>} />
            </Routes>
            <Routes>
                <Route path="/passValidate" element={<PassValidate/>} />
            </Routes>
            <Routes>
                <Route path="/cryptoSearch" element={<CryptoSearch/>} />
            </Routes>
         </BrowserRouter>
    )
}

export default Layout