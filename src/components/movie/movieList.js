import React from 'react';
import { Link } from 'react-router-dom';
import './movieList.scss';

const MovieList = (props) => {
    return (
        <div className="movieItem">
            <div className="poster">
                <Link to={`/film/${props.movie.clean_name}`}>
                    <img src={props.movie.poster} alt={props.movie.name} />
                </Link>
            </div>
            <div className="data">
                <div className="name">
                    <Link to={`/film/${props.movie.clean_name}`}>
                        {props.movie.name}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MovieList;