import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Search from './components/seach/Search';
import MoviePage from './components/moviePage/MoviePage';
import {BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState,useEffect } from 'react';
import {APIURL} from '../src/constant'
import {SEARCHAPI} from '../src/constant'
import {APIKEY} from '../src/constant'

function App() {

  const [trendingMovies,setTrendingMovies] =useState()
  const [heroTrendingMovies,setHeroTrendingMovies] =useState()

  // movie c'est le resultat du input
  const [movie,setMovie]= useState()
  // searchResult c'est le resultat de l'api lié a movie
  const [searchResult,setSearchResult]=useState()
  // movieLink c'est l'id des films sur lesquels on click
  const [movieLink,setMovieLink]=useState()
  // movie Page c'est le resultat de l'api lié a movieLink
  const [moviePage, setMoviePage]=useState()


  const loadSearch =async () => {
    const response = await fetch(`${SEARCHAPI}${movie}`)
    const data = await response.json()
    setSearchResult(data.results)
  }
  const loadMovie =async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieLink}?api_key=${APIKEY}`)
    const data = await response.json()
    setMoviePage(data)
  }

  const loadFilmDb = async () => {
    const response = await fetch(`${APIURL}`)
    const data = await response.json()
    setTrendingMovies(data.results.slice(1,13))
    setHeroTrendingMovies(data.results.slice(0,1))
  }

  useEffect(()=>loadFilmDb(),[])
  useEffect(()=>loadSearch(),[movie])
  useEffect(()=>loadMovie(),[movieLink])



  return (
      <Router>
        <div>

          <Header onSearch={(inputValue)=>setMovie(inputValue)}/>
          <Switch>
            <Route path="/" exact>
              { heroTrendingMovies === undefined ?
                (<div>
                  CHARGEMENT DE MES COUILLES !
                </div>):(
                <>
                  <Home heroTrendingMovies={heroTrendingMovies} trendingMovies={trendingMovies} goMovie={(link)=>setMovieLink(link)}/>
                </>
                )
              }

            </Route>
            <Route path="/search">
              { searchResult === undefined ?
                  (<div>
                    CHARGEMENT DE MES DEUX COUILLES !
                  </div>):(
                  <>
                    <Search searchResult={searchResult} goMovie={(link)=>setMovieLink(link)}/>
                  </>
                  )
                }
            </Route>
            <Route path="/MoviePage">
            { moviePage === undefined ?
                  (<div>
                    CHARGEMENT DE MES TROIS COUILLES !
                  </div>):(
                  <>
                    <MoviePage movieData={moviePage}/>
                  </>
                  )
                }
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
