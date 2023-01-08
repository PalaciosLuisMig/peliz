import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

import { Home } from "../pages/home/Home"
import { Movie } from "../pages/movies/Movie";
import { DetailMovie } from "../pages/detailMovie/DetailMovie";
import { Tv } from "../pages/tv/Tv";
import { DetailTv } from "../pages/detailTv/DetailTv";
import { Error404 } from "../pages/error404/Error404";
import { Search } from "../pages/search/Search";

export const AppRouter = () => {
    return(
        <BrowserRouter>
        <div>
            <Header></Header>
            <Routes>
                <Route exact path = "/" element = {<Home/>}/>
                <Route path = "/movie/" element = {<Movie/>}/>
                <Route path = "/movie/:id" element = {<DetailMovie/>}/>
                <Route path = "/tv/" element = {<Tv/>}/>
                <Route path = "/tv/:id" element = {<DetailTv/>}/>
                <Route path = "/search/" element = {<Search/>}/>
                <Route path = "/search/:value" element = {<Search/>}/>
                <Route path = "*" element = {<Error404/>}/>
            </Routes>
            <Footer></Footer> 
        </div>
        </BrowserRouter>
    )
};