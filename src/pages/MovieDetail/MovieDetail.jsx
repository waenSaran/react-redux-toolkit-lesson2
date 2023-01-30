import React, { useEffect, useState } from 'react'
import "./MovieDetail.scss"
import movieApi from '../../api/MovieApi'
import { APIKey } from '../../api/MovieApiKey'
import { useParams } from 'react-router-dom'

function MovieDetail() {

    const [movie,setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(()=>{
        const fetchDetail = async () => {
            const res = await movieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`)
            .catch( err => {
                console.error(err);
            })
            setMovie(res.data);
            setLoading(false);
        }
        fetchDetail();
    }, []);

  return (
    <>
        { loading ? <h1>Loading...</h1> 
        : (
        <div className="movie-detail">
            <div className="movie-dedtail-img">
                <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="movie-detail content">
                <div className="movie-detail header">
                <h1>{ movie.Title }</h1>
                <div className="movie-detail score">
                    <h4>{ movie.Rated }</h4>
                    <h4>{ movie.Runtime }</h4>
                    <h4>IMDB: { movie.Ratings[0]?.Value }</h4>
                </div>
                </div>
                <p>{ movie.Plot }</p>
                <h4>Release: { movie.Released }</h4>
            </div>
        </div>
        )
        
        }
    </>
  )
}

export default MovieDetail