import React from 'react';
import {IMGPATH} from '../../constant';
import Button from '../button/Button';
import './hero.css';
import {Link} from "react-router-dom";

const Hero = ({heroTrendingMovies,goMovie}) => {
    return (
        <div className="hero">
            <img src={`${IMGPATH}${heroTrendingMovies[0].backdrop_path}`} alt={`Movie title : ${heroTrendingMovies[0].original_title}`}/>
            <div className="movie">
                <h2 className="title">{heroTrendingMovies[0].original_title}</h2>
                <p className="overview">{heroTrendingMovies[0].overview}</p>
                <p className="vote">{heroTrendingMovies[0].vote_average}</p>
                <Link to="/MoviePage"><Button goMovie={()=>goMovie(heroTrendingMovies[0].id)}>Go to the Movie</Button></Link>
            </div>
        </div>
    );
};

export default Hero;