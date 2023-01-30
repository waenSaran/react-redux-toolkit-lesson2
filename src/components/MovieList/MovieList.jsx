import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieList.scss"

function MovieList() {

    const { movies } = useSelector((state)=> state.movies)

  return (
    <div className='movie-container'>
        { movies && movies.map( movie => (
            <MovieCard key={movie.imdbID} movieData={movie} />
        )) }
    </div>
  )
}

export default MovieList