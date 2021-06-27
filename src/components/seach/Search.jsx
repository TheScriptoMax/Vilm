import React from 'react';
import CardMovie from '../cardMovie/CardMovie';

const Search = ({searchResult,goMovie}) => {
    return (
        <div className='trendingMovies'>
            <div className="container">
                <h2>Results</h2>
                <ul className='trendingMoviesCard'>
                    {
                        searchResult.map((elem,index)=>{
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

export default Search;