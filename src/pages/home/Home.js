import './Home.css'
import { Banner} from "../../components/Banner/Banner";
import { PopularMovies } from "../../components/PopularMovies/PopularMovies";
import { PopularKidsMovies } from "../../components/PopularKidsMovies/PopularKidsMovies";
import { MoviesTheatres } from "../../components/MoviesTheatres/MoviesTheatres";



export const Home = () => {

    return(
        <>
        {/* Banner */}
        <section className="main-banner">
            <Banner></Banner>
        </section>

        {/* Popular Movies */}
        <section className='section'>
            <div className='content-wrapper'>
                <div className='container'>
                <PopularMovies></PopularMovies>
                </div>
            </div>
        </section>

        {/* Popular kids movies */}
        <section className='section'>
            <div className='content-wrapper'>
                <div className='container'>
                <PopularKidsMovies></PopularKidsMovies>
                </div>
            </div>
        </section>

        {/* Movies */}
        <section className='section'>
            <div className='content-wrapper'>
                <div className='container'>
                <MoviesTheatres></MoviesTheatres>
                </div>
            </div>
        </section>
        </>
    );
};