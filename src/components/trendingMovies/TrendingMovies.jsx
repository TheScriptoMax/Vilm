import React from 'react';
import CardMovie from '../cardMovie/CardMovie';
import './trendingMovies.css'

const TrendingMovies = ({trendingMovies,goMovie}) => {
    return (
        <div className='trendingMovies'>
            <div className='container'>
                <h3>Trending Movies</h3>
                <ul className='trendingMoviesCard'>
                {
                    trendingMovies.map((elem,index) => {
                        return <CardMovie
                                    key={index}
                                    poster={elem.poster_path}
                                    title={elem.original_title}
                                    date={elem.release_date === undefined ? '': elem.release_date }
                                    goMovie={()=>goMovie(elem.id)}
                                    />
                    })
                }
                </ul>
            </div>
        </div>
    );
};

export default TrendingMovies;