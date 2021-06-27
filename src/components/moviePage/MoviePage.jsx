import React from 'react';
import Button from '../button/Button';
import { IMGPATH } from '../../constant';
import './moviePage.css'

const MoviePage = ({movieData}) => {
    return (
        <div>
            <section className="movieHero">
                <figure>
                    <img src={`${IMGPATH}${movieData.backdrop_path}`} alt='' />
                </figure>
            </section>
            <section className="moviePage">
                <div className="container">

                    <figure className="poster">
                        <img src={`${IMGPATH}${movieData.poster_path}`} alt='' />
                    </figure>
                    <div className="movieHeader">
                        <h2>{movieData.original_title}</h2>
                        <p>{movieData.vote_average}</p>
                        <Button>Play Trailer</Button>
                    </div>
                    <div className="movieContent">
                        <h3>Overview</h3>
                        <p>{movieData.overview}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MoviePage;