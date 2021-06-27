import React from 'react';
import Hero from '../hero/Hero';
import TrendingMovies from '../trendingMovies/TrendingMovies';


const Home = ({heroTrendingMovies,trendingMovies,goMovie}) => {

    return (
        <>
            <Hero heroTrendingMovies={heroTrendingMovies} goMovie={(link)=>goMovie(link)} />
            <TrendingMovies trendingMovies={trendingMovies} goMovie={(title)=>goMovie(title)}/>
        </>
    );
};

export default Home;