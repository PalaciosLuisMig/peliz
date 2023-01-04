import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

import { Home } from "../pages/home/Home"
import { Error404 } from "../pages/error404/Error404";
import { Search } from "../pages/search/Search";

export const AppRouter = () => {
    return(
        <BrowserRouter>
        <div>
            <Header></Header>
            <Routes>
                <Route exact path = "/" element = {<Home/>}/>
                <Route path = "/search/" element = {<Search/>}/>
                <Route path = "/search/:value" element = {<Search/>}/>
                <Route path="*" element = {<Error404/>}/>
            </Routes>
            <Footer></Footer> 
        </div>
        </BrowserRouter>
    )
};