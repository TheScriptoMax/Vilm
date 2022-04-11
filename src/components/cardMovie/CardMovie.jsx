import React from 'react';
import './cardMovie.css'
import {Link} from "react-router-dom";

const IMGPATH = process.env.REACT_APP_IMG_PATH ;
const CardMovie = ({poster, title, date,goMovie}) => {
    const dateArr = date.match(/\d{4}/gm)
    return (
        <Link to="/MoviePage">
            <li className="card" onClick={()=>goMovie()}>
                <figure>
                    <img src={`${IMGPATH}${poster}`} alt={`Movie title : ${title}`}/>
                </figure>
                <div className="titleDate">
                    <h4>{title}</h4>
                    <p>{dateArr}</p>
                </div>

            </li>
        </Link>
    );
};

export default CardMovie;