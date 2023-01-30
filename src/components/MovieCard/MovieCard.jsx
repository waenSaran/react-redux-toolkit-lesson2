import React from 'react'
import { Link } from 'react-router-dom'
import "./MovieCard.scss"

function MovieCard({ movieData }) {

  return (
    <div className='card'>
        <div className="card-img">
            <img src={ movieData.Poster } alt={ movieData.Title } />
        </div>
        <div className="card-content">
        <h4>{ movieData.Title }</h4>
        <p>Year: { movieData.Year }</p>
        </div>
        <div className="card-action">
            <Link to={`movie/${movieData.imdbID}`}>Read More</Link>
        </div>
    </div>
  )
}

export default MovieCard